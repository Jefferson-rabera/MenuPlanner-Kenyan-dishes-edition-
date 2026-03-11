// ============================================================
// MenuKe — Unsplash Proxy Server
// ============================================================
// Keeps your Unsplash API key off the browser.
// The frontend calls /api/image?q=... and this server
// calls Unsplash with the real key, then returns the URL.
//
// Usage:
//   npm install          (first time only)
//   node server.js       (starts on http://localhost:3000)
// ============================================================

const http    = require('http');
const https   = require('https');
const path    = require('path');
const fs      = require('fs');

// Load .env file manually — no npm packages needed
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, 'utf8').split('
').forEach(line => {
        const [key, ...val] = line.split('=');
        if (key && val.length) process.env[key.trim()] = val.join('=').trim();
    });
}

const PORT          = 3000;
const UNSPLASH_KEY  = process.env.UNSPLASH_KEY || '';

if (!UNSPLASH_KEY) {
    console.warn('  WARNING: UNSPLASH_KEY not found in .env — images will use fallbacks');
}
const STATIC_DIR    = __dirname;   // serves index.html, script.js, styles.css

// ── In-memory image cache (survives for the life of the server process) ──
const imageCache = {};

// ── MIME types for static files ──────────────────────────────────────────
const MIME = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.svg':  'image/svg+xml',
    '.ico':  'image/x-icon',
};

// ── Helper: fetch from Unsplash ───────────────────────────────────────────
function unsplashFetch(query) {
    return new Promise((resolve, reject) => {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=squarish&content_filter=high&client_id=${UNSPLASH_KEY}`;
        https.get(endpoint, { headers: { 'Accept-Version': 'v1' } }, res => {
            let raw = '';
            res.on('data', chunk => raw += chunk);
            res.on('end', () => {
                try {
                    const data = JSON.parse(raw);
                    if (data.results && data.results.length > 0) {
                        resolve(data.results[0].urls.small);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// ── Main server ───────────────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {

    const parsed   = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = parsed.pathname;

    // ── CORS headers so the browser can call this from any origin ──
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // ── /api/image?q=<search term> ─────────────────────────────────
    if (pathname === '/api/image') {
        const query = parsed.searchParams.get('q');
        if (!query) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing query parameter: q' }));
            return;
        }

        // Return cached result if available
        if (imageCache[query]) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ url: imageCache[query] }));
            return;
        }

        try {
            const imgUrl = await unsplashFetch(query);
            if (imgUrl) {
                imageCache[query] = imgUrl;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ url: imgUrl }));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'No image found', url: null }));
            }
        } catch (err) {
            console.error('Unsplash error:', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Unsplash fetch failed', url: null }));
        }
        return;
    }

    // ── Static file serving ────────────────────────────────────────
    // Serve index.html for root
    let filePath = pathname === '/'
        ? path.join(STATIC_DIR, 'index.html')
        : path.join(STATIC_DIR, pathname);

    // Security: prevent directory traversal
    if (!filePath.startsWith(STATIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    const ext      = path.extname(filePath);
    const mimeType = MIME[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log('');
    console.log('  MenuKe server running');
    console.log(`  Open: http://localhost:${PORT}`);
    console.log(`  API:  http://localhost:${PORT}/api/image?q=ugali+kenya`);
    console.log('');
});