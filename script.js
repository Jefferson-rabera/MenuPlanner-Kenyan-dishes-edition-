// ============================================================
// 1. DATASETS
// ============================================================

const counties = [
    { name: "Mombasa", region: "Coast" }, { name: "Kwale", region: "Coast" }, { name: "Kilifi", region: "Coast" },
    { name: "Tana River", region: "Coast" }, { name: "Lamu", region: "Coast" }, { name: "Taita-Taveta", region: "Coast" },
    { name: "Nairobi", region: "Nairobi" },
    { name: "Nyandarua", region: "Central" }, { name: "Nyeri", region: "Central" }, { name: "Kirinyaga", region: "Central" },
    { name: "Murang'a", region: "Central" }, { name: "Kiambu", region: "Central" },
    { name: "Marsabit", region: "Eastern" }, { name: "Isiolo", region: "Eastern" }, { name: "Meru", region: "Eastern" },
    { name: "Tharaka-Nithi", region: "Eastern" }, { name: "Embu", region: "Eastern" }, { name: "Kitui", region: "Eastern" },
    { name: "Machakos", region: "Eastern" }, { name: "Makueni", region: "Eastern" },
    { name: "Turkana", region: "Rift Valley" }, { name: "West Pokot", region: "Rift Valley" }, { name: "Samburu", region: "Rift Valley" },
    { name: "Trans-Nzoia", region: "Rift Valley" }, { name: "Uasin Gishu", region: "Rift Valley" }, { name: "Elgeyo-Marakwet", region: "Rift Valley" },
    { name: "Nandi", region: "Rift Valley" }, { name: "Baringo", region: "Rift Valley" }, { name: "Laikipia", region: "Rift Valley" },
    { name: "Nakuru", region: "Rift Valley" }, { name: "Narok", region: "Rift Valley" }, { name: "Kajiado", region: "Rift Valley" },
    { name: "Kericho", region: "Rift Valley" }, { name: "Bomet", region: "Rift Valley" },
    { name: "Kakamega", region: "Western" }, { name: "Vihiga", region: "Western" }, { name: "Bungoma", region: "Western" }, { name: "Busia", region: "Western" },
    { name: "Siaya", region: "Nyanza" }, { name: "Kisumu", region: "Nyanza" }, { name: "Homa Bay", region: "Nyanza" },
    { name: "Migori", region: "Nyanza" }, { name: "Kisii", region: "Nyanza" }, { name: "Nyamira", region: "Nyanza" },
    { name: "Garissa", region: "North Eastern" }, { name: "Wajir", region: "North Eastern" }, { name: "Mandera", region: "North Eastern" }
];

const foodItems = [
    // ── NYANZA ──
    { id: 101, name: "Tilapia (Pan-fried)", region: ["Nyanza"], category: "Protein", calories: 180, nutrition: "High Protein", type: "Omega-3 Rich", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400" },
    { id: 102, name: "Ugali", region: ["Nyanza","Central","Western","Nairobi","Rift Valley","Eastern"], category: "Carb", calories: 150, nutrition: "Energy", type: "Slow Release Carb", img: "https://upload.wikimedia.org/wikipedia/commons/6/60/Ugali%2C_Maini_and_Sukuma_managu.jpg" },
    { id: 103, name: "Sukuma Wiki", region: ["Nyanza","Central","Nairobi","Western","Eastern"], category: "Side", calories: 40, nutrition: "High Fiber", type: "Vegetable", img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Sukuma_wiki.jpg" },
    { id: 110, name: "Matoke (Steamed Bananas)", region: ["Nyanza"], category: "Carb", calories: 130, nutrition: "Balanced", type: "Potassium Rich", img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Matoke_with_stew.jpg" },
    { id: 111, name: "Beef Stew", region: ["Nyanza","Central","Nairobi","Eastern"], category: "Protein", calories: 220, nutrition: "High Protein", type: "Iron Rich", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" },
    // ── WESTERN ──
    { id: 201, name: "Ingokho (Village Chicken)", region: ["Western"], category: "Protein", calories: 280, nutrition: "High Protein", type: "Lean Meat", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
    { id: 202, name: "Omena (Silver Cyprinid)", region: ["Western","Nyanza"], category: "Protein", calories: 120, nutrition: "High Protein", type: "Omega-3 Rich", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Omena_Kenya.jpg" },
    // ── CENTRAL ──
    { id: 301, name: "Mukimo", region: ["Central"], category: "Carb", calories: 260, nutrition: "High Fiber", type: "Slow Release Carb", img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Mukimo.jpg" },
    { id: 302, name: "Githeri", region: ["Central","Eastern"], category: "Carb", calories: 210, nutrition: "Vegetarian", type: "Fiber Rich", img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Githeri.jpg" },
    { id: 303, name: "Irio (Peas & Potato Mash)", region: ["Central"], category: "Carb", calories: 200, nutrition: "Balanced", type: "Fiber Rich", img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Irio.jpg" },
    // ── NAIROBI ──
    { id: 401, name: "Nyama Choma (Goat)", region: ["Nairobi","Rift Valley"], category: "Protein", calories: 350, nutrition: "High Protein", type: "Urban Classic", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" },
    { id: 402, name: "Kachumbari", region: ["Nairobi","Coast","Rift Valley"], category: "Side", calories: 30, nutrition: "Low Cal", type: "Fresh Salad", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Kachumbari.jpg" },
    { id: 403, name: "Roasted Maize", region: ["Nairobi","Rift Valley","Western"], category: "Snack", calories: 110, nutrition: "Energy", type: "Street Food", img: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400" },
    // ── COAST ──
    { id: 501, name: "Pilau Rice", region: ["Coast"], category: "Carb", calories: 320, nutrition: "Balanced", type: "Energy Booster", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Food_Kenya_Pilau.jpg" },
    { id: 502, name: "Wali wa Nazi (Coconut Rice)", region: ["Coast"], category: "Carb", calories: 270, nutrition: "Vegetarian", type: "Plant Based", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rice_and_coconut_milk_snacks.jpg" },
    { id: 503, name: "Beef (Spiced Coast Style)", region: ["Coast"], category: "Protein", calories: 240, nutrition: "High Protein", type: "Iron Rich", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400" },
    { id: 504, name: "Yellow Beans", region: ["Coast"], category: "Side", calories: 160, nutrition: "Vegetarian", type: "Plant Based", img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Yellow_beans.jpg" },
    { id: 505, name: "Mahamri", region: ["Coast"], category: "Snack", calories: 180, nutrition: "Energy", type: "Street Food", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mahamri.jpg" },
    // ── RIFT VALLEY ──
    { id: 601, name: "Mursik (Fermented Milk)", region: ["Rift Valley"], category: "Drink", calories: 80, nutrition: "Probiotic", type: "Gut Health", img: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Traditional_Gourd_Used_by_the_Kipsigis_tribe_in_kenya..jpg" },
    { id: 602, name: "Millet Ugali", region: ["Rift Valley"], category: "Carb", calories: 160, nutrition: "High Fiber", type: "Slow Release Carb", img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Githeri.jpg" },
    { id: 603, name: "Managu (African Nightshade)", region: ["Rift Valley","Western","Nyanza"], category: "Side", calories: 35, nutrition: "Probiotic", type: "Gut Health", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Traditional_Managu.jpg" },
    { id: 604, name: "Fresh Milk", region: ["Rift Valley","Central"], category: "Drink", calories: 70, nutrition: "Calcium Rich", type: "Dairy", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400" },
    // ── EASTERN ──
    { id: 701, name: "Beans Stew", region: ["Eastern","Central","Nyanza"], category: "Protein", calories: 190, nutrition: "Vegetarian", type: "Fiber Rich", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
    { id: 702, name: "Kales (Steamed)", region: ["Eastern","Central","Nairobi"], category: "Side", calories: 45, nutrition: "High Fiber", type: "Vegetable", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Steamed_kales.jpg" },
    // ── NORTH EASTERN ──
    { id: 801, name: "Camel Meat (Slow-cooked)", region: ["North Eastern"], category: "Protein", calories: 260, nutrition: "High Protein", type: "Iron Rich", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400" },
    { id: 802, name: "Basmati Rice", region: ["North Eastern","Coast"], category: "Carb", calories: 200, nutrition: "Balanced", type: "Energy Booster", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400" },
    { id: 803, name: "Camel Milk (Suusa)", region: ["North Eastern"], category: "Drink", calories: 60, nutrition: "Probiotic", type: "Gut Health", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Camel_milk.jpg" },
    { id: 804, name: "Chapati", region: ["North Eastern","Coast","Nairobi"], category: "Carb", calories: 170, nutrition: "Energy", type: "Slow Release Carb", img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Chapati_making.jpg" },
];

const categories = ["All", "Protein", "Carb", "Side", "Drink", "Snack"];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const countyCoordinates = {
    "Mombasa": [-4.04, 39.67], "Kwale": [-4.25, 39.40], "Kilifi": [-3.27, 39.84], "Tana River": [-2.43, 40.30],
    "Lamu": [-2.28, 40.90], "Taita-Taveta": [-3.40, 38.28], "Nairobi": [-1.29, 36.82],
    "Nyandarua": [-0.55, 36.65], "Nyeri": [-0.43, 37.07], "Kirinyaga": [-0.54, 37.50], "Murang'a": [-0.67, 37.13], "Kiambu": [-1.17, 36.83],
    "Marsabit": [2.73, 37.98], "Isiolo": [0.35, 37.58], "Meru": [0.05, 37.65], "Tharaka-Nithi": [-0.35, 37.88],
    "Embu": [-0.50, 37.45], "Kitui": [-1.30, 38.40], "Machakos": [-2.27, 37.27], "Makueni": [-2.73, 38.13],
    "Turkana": [3.60, 35.60], "West Pokot": [1.40, 35.30], "Samburu": [1.08, 37.18], "Trans-Nzoia": [1.02, 35.03],
    "Uasin Gishu": [1.00, 34.77], "Elgeyo-Marakwet": [1.18, 35.30], "Nandi": [0.37, 34.95], "Baringo": [0.68, 36.13],
    "Laikipia": [-0.28, 36.63], "Nakuru": [-0.30, 36.15], "Narok": [-1.30, 35.87], "Kajiado": [-2.20, 36.78],
    "Kericho": [-0.37, 35.28], "Bomet": [-0.78, 35.33], "Kakamega": [0.28, 34.75], "Vihiga": [0.10, 34.75],
    "Bungoma": [0.58, 34.57], "Busia": [0.48, 34.11], "Siaya": [0.68, 34.28], "Kisumu": [-0.10, 34.77],
    "Homa Bay": [-0.68, 34.48], "Migori": [-1.07, 34.48], "Kisii": [-0.68, 34.78], "Nyamira": [-0.57, 35.13],
    "Garissa": [-0.45, 39.65], "Wajir": [1.73, 40.07], "Mandera": [3.85, 41.87]
};

// ============================================================
// 2. STATE
// ============================================================
let currentRegion = null;
let currentCategoryFilter = "All";
let currentPlate = [];
let weeklyPlanner = JSON.parse(localStorage.getItem('menuKeWeekly') || '{}');

// ============================================================
// 3. UNSPLASH IMAGE SYSTEM
// ============================================================

// Curated search terms per food id — ensures accurate results
// for niche Kenyan dishes that a generic name search would miss
// IDs in this set use Unsplash via the proxy (generic dishes)
// All other IDs use their hardcoded Wikimedia img URL directly
const unsplashIds = new Set([101,102,111,201,202,301,303,401,402,403,502,503,504,505,601,602,604,701,702,801,802,804]);

const unsplashSearchTerms = {
    // Nyanza
    101: 'whole fried tilapia fish plate golden crispy',
    102: 'whole ugali stiff white maize porridge plate meal',
    111: 'beef stew chunks thick gravy brown sauce bowl',
    // Western
    201: 'whole stewed chicken pieces tomato sauce pot',
    202: 'dried anchovies small silver fish fried bowl',
    // Central
    301: 'mashed potato spinach green vegetable cake',
    303: 'mashed green peas potato lentil patty bowl',
    // Nairobi
    401: 'grilled goat meat roasted charcoal smoke platter kenya',
    402: 'fresh tomato onion cucumber salad chopped bowl kachumbari',
    403: 'corn on cob roasted charcoal grill yellow kernels',
    // Coast
    502: 'coconut milk rice fluffy white creamy bowl',
    503: 'spiced braised beef dark sauce stew bowl',
    504: 'cooked yellow kidney beans orange stew pot',
    505: 'mandazi fried dough triangle east african pastry',
    // Rift Valley
    604: 'fresh cold milk white glass dairy poured',
    // Eastern
    701: 'bean stew thick sauce legumes cooked pot',
    702: 'steamed chopped dark leafy kale greens cooked',
    // North Eastern
    801: 'slow cooked meat chunks broth stew pot',
    802: 'cooked basmati rice fluffy white long grain bowl',
    601: 'fermented sour milk white clay pot traditional',
    602: 'millet porridge dark brown thick stiff bowl african',
    804: 'soft layered flatbread chapati stacked pile',
};

// In-memory cache so we never fetch the same id twice in a session
const imgCache = {};

// Returns a Promise that resolves to the best image URL for the item.
// Wikimedia items: return their hardcoded img immediately (no proxy).
// Unsplash items:  call the local proxy which holds the real API key.
async function getUnsplashImage(item) {
    if (imgCache[item.id]) return imgCache[item.id];

    // Wikimedia items — use static URL directly, no API call needed
    if (!unsplashIds.has(item.id)) {
        imgCache[item.id] = item.img;
        return item.img;
    }

    const query = unsplashSearchTerms[item.id] || item.name;
    try {
        const res  = await fetch(`/api/image?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        const imgUrl = data.url || item.img;
        imgCache[item.id] = imgUrl;
        return imgUrl;
    } catch (e) {
        imgCache[item.id] = item.img;
        return item.img;
    }
}

// Pre-fetches all images for a list of items in parallel
// and updates the DOM cards once resolved — no render blocking
async function prefetchAndUpdateImages(items) {
    await Promise.all(items.map(async item => {
        const url = await getUnsplashImage(item);
        // Update any card already in the DOM for this item
        const card = document.querySelector(`[data-item-id="${item.id}"]`);
        if (card) {
            const imgDiv = card.querySelector('.recipe-image');
            if (imgDiv) imgDiv.style.backgroundImage = `url('${url}')`;
        }
    }));
}

// ============================================================
// 4. SINGLE INIT — replaces both window.onload and the old
//    DOMContentLoaded block so there is no race condition
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

    // Populate county dropdown
    const select = document.getElementById('county-select');
    counties.slice().sort((a, b) => a.name.localeCompare(b.name)).forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.name;
        opt.textContent = c.name;
        select.appendChild(opt);
    });

    // Attach every listener in one place
    select.addEventListener('change', manualSelect);
    document.getElementById('detect-btn').addEventListener('click', detectLocation);
    document.getElementById('clear-plate-btn').addEventListener('click', clearPlate);
    document.getElementById('assign-plate-btn').addEventListener('click', assignPlateToDay);
    document.getElementById('reset-week-btn').addEventListener('click', resetWeeklyPlan);
    document.getElementById('print-btn').addEventListener('click', generateShoppingList);

    const searchInput = document.getElementById('recipe-search');
    if (searchInput) searchInput.addEventListener('input', handleSearch);

    // Render persistent sections on load
    renderWeeklyPlanner();
    updateDownloadBtn();
});

// ============================================================
// 4. LOCATION SELECTION
// ============================================================
function manualSelect() {
    const cityName = document.getElementById('county-select').value;
    const county = counties.find(c => c.name === cityName);
    if (!county) return;

    currentRegion = county.region;
    currentCategoryFilter = "All";
    currentPlate = [];

    document.getElementById('location-heading').innerHTML =
        `Build Your Plate &mdash; <span style="color:var(--ww-gold)">${county.name}</span>`;

    document.getElementById('filter-bar').style.display = 'flex';
    document.getElementById('results').style.display = 'block';
    document.getElementById('plate-builder-section').style.display = 'block';

    renderCategoryFilters();
    renderFoodItems();
    renderPlate();

    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function detectLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation not supported. Defaulting to Nairobi.');
        document.getElementById('county-select').value = "Nairobi";
        manualSelect();
        return;
    }
    navigator.geolocation.getCurrentPosition(
        pos => {
            const matched = findNearestCounty(pos.coords.latitude, pos.coords.longitude);
            document.getElementById('county-select').value = matched.name;
            manualSelect();
        },
        () => {
            alert('Could not detect location. Defaulting to Nairobi.');
            document.getElementById('county-select').value = "Nairobi";
            manualSelect();
        }
    );
}

function findNearestCounty(lat, lon) {
    let nearest = counties[0], min = Infinity;
    for (const c of counties) {
        const [cLat, cLon] = countyCoordinates[c.name] || [0, 0];
        const d = Math.sqrt((lat - cLat) ** 2 + (lon - cLon) ** 2);
        if (d < min) { min = d; nearest = c; }
    }
    return nearest;
}

// ============================================================
// 5. FOOD ITEM RENDERING
// ============================================================
function getRegionItems() {
    return foodItems.filter(f => f.region.includes(currentRegion));
}

function renderCategoryFilters() {
    const bar = document.getElementById('filter-bar');
    bar.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-chip' + (cat === currentCategoryFilter ? ' active' : '');
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            currentCategoryFilter = cat;
            renderCategoryFilters();
            renderFoodItems();
        });
        bar.appendChild(btn);
    });
}

function renderFoodItems() {
    const container = document.getElementById('recipe-list');
    container.innerHTML = '';

    let items = getRegionItems();
    if (currentCategoryFilter !== 'All') {
        items = items.filter(f => f.category === currentCategoryFilter);
    }

    if (items.length === 0) {
        container.innerHTML = `<p class="empty-msg">No items found for this filter.</p>`;
        return;
    }

    items.forEach(item => {
        const isSelected = currentPlate.includes(item.id);
        const card = document.createElement('div');
        card.className = 'recipe-card' + (isSelected ? ' selected' : '');
        card.style.border = isSelected ? '2px solid #00501a' : '';
        card.dataset.itemId = item.id;

        card.innerHTML = `
            <div class="recipe-image" style="background-image:url('${item.img}'); position:relative;">
                <span class="nutri-badge">${item.category}</span>
                ${isSelected ? `<span style="position:absolute;top:8px;right:8px;background:#00501a;color:white;
                    font-size:0.7rem;font-weight:bold;padding:3px 8px;border-radius:20px;z-index:2;"> Added</span>` : ''}
            </div>
            <div class="recipe-content">
                <span class="type-tag">${item.type}</span>
                <h3>${item.name}</h3>
                <div class="calorie-label">${item.calories} kcal</div>
                <p style="font-size:0.78rem;color:#777;margin:4px 0 10px;">${item.nutrition}</p>
                <button class="btn-add-plate ${isSelected ? 'btn-remove' : ''}"
                    onclick="togglePlateItem(${item.id})">
                    ${isSelected ? 'Remove from Plate' : '+ Add to My Plate'}
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    // Fetch Unsplash images in background — updates cards once loaded
    prefetchAndUpdateImages(items);
}

// ============================================================
// 6. PLATE BUILDER
// ============================================================
function togglePlateItem(id) {
    const idx = currentPlate.indexOf(id);
    if (idx === -1) { currentPlate.push(id); }
    else            { currentPlate.splice(idx, 1); }
    renderFoodItems();
    renderPlate();
}

function renderPlate() {
    const plateDisplay    = document.getElementById('plate-display');
    const totalCalEl      = document.getElementById('plate-calories');
    const nutritionSumEl  = document.getElementById('nutrition-summary');
    const emptyMsg        = document.getElementById('plate-empty-msg');
    const assignSection   = document.getElementById('plate-assign-section');

    if (currentPlate.length === 0) {
        plateDisplay.innerHTML = '';
        emptyMsg.style.display = 'block';
        totalCalEl.textContent = '0';
        nutritionSumEl.innerHTML = '';
        assignSection.style.display = 'none';
        return;
    }

    emptyMsg.style.display = 'none';
    assignSection.style.display = 'block';

    const selected   = foodItems.filter(f => currentPlate.includes(f.id));
    const totalCals  = selected.reduce((sum, f) => sum + f.calories, 0);
    totalCalEl.textContent = totalCals;

    // Nutrition summary pills
    const nutCounts = {};
    selected.forEach(f => { nutCounts[f.nutrition] = (nutCounts[f.nutrition] || 0) + 1; });
    const nutColors = {
        'High Protein':'#ffcccc','Vegetarian':'#ccffcc','Balanced':'#ffffcc',
        'High Fiber':'#d4edda','Probiotic':'#d1ecf1','Energy':'#fff3cd',
        'Low Cal':'#e2e3e5','Calcium Rich':'#cce5ff','Iron Rich':'#f8d7da'
    };
    nutritionSumEl.innerHTML = Object.entries(nutCounts).map(([n, c]) =>
        `<span class="nutri-pill" style="background:${nutColors[n] || '#eee'}">${n}${c > 1 ? ` &times;${c}` : ''}</span>`
    ).join('');

    // Plate item chips
    plateDisplay.innerHTML = `
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:12px;">
        ${selected.map(f => `
            <div style="display:flex;align-items:center;gap:8px;background:#f4f9f5;
                border:1px solid #c8e6c9;border-radius:30px;padding:6px 12px 6px 6px;font-size:0.82rem;">
                <div style="width:36px;height:36px;border-radius:50%;
                    background-image:url('${f.img}');background-size:cover;
                    background-position:center;flex-shrink:0;"></div>
                <span style="font-weight:600;color:#333;">${f.name}</span>
                <span style="color:#888;">${f.calories} kcal</span>
                <button onclick="togglePlateItem(${f.id})"
                    style="background:none;border:none;cursor:pointer;color:#ff6b6b;font-size:1rem;padding:0 2px;">
                    </button>
            </div>
        `).join('')}
        </div>
    `;
}

function clearPlate() {
    currentPlate = [];
    renderFoodItems();
    renderPlate();
}

// ============================================================
// 7. ASSIGN PLATE TO WEEK
// ============================================================
function assignPlateToDay() {
    const daySelect = document.getElementById('assign-day-select');
    const day = daySelect.value;
    if (!day)                  { showToast('Please select a day first.'); return; }
    if (!currentPlate.length)  { showToast('Your plate is empty!'); return; }

    weeklyPlanner[day] = [...currentPlate];
    localStorage.setItem('menuKeWeekly', JSON.stringify(weeklyPlanner));
    renderWeeklyPlanner();
    updateDownloadBtn();
    daySelect.value = '';
    showToast(`Plate saved to ${day}!`);
}

// ============================================================
// 8. WEEKLY PLANNER
// ============================================================
function renderWeeklyPlanner() {
    const grid = document.getElementById('weekly-grid');
    if (!grid) return;
    grid.innerHTML = '';

    daysOfWeek.forEach(day => {
        const itemIds  = weeklyPlanner[day] || [];
        const items    = foodItems.filter(f => itemIds.includes(f.id));
        const totalCals = items.reduce((s, f) => s + f.calories, 0);

        const card = document.createElement('div');
        card.className = 'weekly-day-card' + (items.length ? ' has-meal' : '');
        card.style.cssText = `
            background:white; border-radius:12px; padding:12px;
            box-shadow:0 2px 8px rgba(0,0,0,0.07); text-align:center;
            border:2px solid ${items.length ? '#00501a' : '#e6f0e9'};
            transition:all 0.3s ease; min-height:110px;
        `;

        card.innerHTML = `
            <strong style="display:block;font-size:0.82rem;
                color:${items.length ? '#00501a' : '#999'};
                margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">${day}</strong>
            ${items.length ? `
                <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:8px;">
                    ${items.map(f => `
                        <div style="display:flex;align-items:center;gap:6px;">
                            <div style="width:26px;height:26px;border-radius:5px;flex-shrink:0;
                                background-image:url('${f.img}');background-size:cover;
                                background-position:center;"></div>
                            <span style="font-size:0.7rem;color:#333;font-weight:600;text-align:left;">${f.name}</span>
                        </div>
                    `).join('')}
                </div>
                <div style="font-size:0.7rem;color:#555;margin-bottom:6px;">${totalCals} kcal</div>
                <button onclick="removeDayPlan('${day}')"
                    style="width:100%;padding:5px;background:#ff6b6b;color:white;border:none;
                    border-radius:5px;cursor:pointer;font-size:0.7rem;font-weight:bold;">
                    Clear</button>
            ` : `<p style="margin:0;color:#bbb;font-size:0.8rem;">No meal planned</p>`}
        `;
        grid.appendChild(card);
    });
}

function removeDayPlan(day) {
    delete weeklyPlanner[day];
    localStorage.setItem('menuKeWeekly', JSON.stringify(weeklyPlanner));
    renderWeeklyPlanner();
    updateDownloadBtn();
}

function resetWeeklyPlan() {
    if (confirm('Clear your entire weekly schedule?')) {
        weeklyPlanner = {};
        localStorage.setItem('menuKeWeekly', JSON.stringify(weeklyPlanner));
        renderWeeklyPlanner();
        updateDownloadBtn();
    }
}

// ============================================================
// 9. FAVORITES

function updateDownloadBtn() {
    const printBtn = document.getElementById('print-btn');
    if (!printBtn) return;
    const hasPlanned = daysOfWeek.some(d => weeklyPlanner[d] && weeklyPlanner[d].length);
    printBtn.style.display = hasPlanned ? 'inline-flex' : 'none';
}



// ============================================================
// 10. SEARCH
// ============================================================
function handleSearch(e) {
    const q = e.target.value.toLowerCase().trim();
    if (!q) return;

    const results = foodItems.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.type.toLowerCase().includes(q) ||
        f.nutrition.toLowerCase().includes(q)
    );

    const container = document.getElementById('recipe-list');
    document.getElementById('results').style.display = 'block';
    document.getElementById('location-heading').innerHTML =
        `Results for <span style="color:var(--ww-gold)">"${e.target.value}"</span>`;

    if (results.length === 0) {
        container.innerHTML = `<p class="empty-msg">No results found.</p>`;
        return;
    }

    container.innerHTML = results.map(item => `
        <div class="recipe-card" data-item-id="${item.id}">
            <div class="recipe-image" style="background-image:url('${item.img}')">
                <span class="nutri-badge">${item.category}</span>
            </div>
            <div class="recipe-content">
                <span class="type-tag">${item.type}</span>
                <h3>${item.name}</h3>
                <div class="calorie-label">${item.calories} kcal</div>
                <button class="btn-add-plate" onclick="togglePlateItem(${item.id})">
                    + Add to My Plate
                </button>
            </div>
        </div>
    `).join('');

    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });

    // Fetch Unsplash images for search results
    prefetchAndUpdateImages(results);
}

// ============================================================
// 11. PDF SHOPPING LIST
// ============================================================
// Actual MenuKe logo embedded as base64 PNG — pixel perfect
function renderLogoToBase64() {
    return 'data:image/png;base64,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';
}

async function generateShoppingList() {
    const plannedDays = daysOfWeek.filter(d => weeklyPlanner[d] && weeklyPlanner[d].length);
    if (!plannedDays.length) { showToast('Plan at least one day first!'); return; }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // ── HEADER: logo image (spoon + fork + MenuKe text) ─────────
    const logoBase64 = renderLogoToBase64();
    // Place logo: x=12, y=7, width=57mm, height=13.5mm (matches aspect 340:80)
    doc.addImage(logoBase64, 'PNG', 12, 7, 57, 16.6);

    // Tagline to the right of logo
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text("Local Kenyan Meals, Fresh Every Week", 72, 12);

    // Divider line under header
    doc.setDrawColor(0, 80, 26);
    doc.setLineWidth(0.5);
    doc.line(12, 26, 198, 26);

    // Document title + date
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(30);
    doc.text("Weekly Plate Plan & Shopping List", 12, 33);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(130);
    doc.text(`Generated: ${new Date().toLocaleDateString('en-KE', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}`, 12, 39);

    let y = 49;
    plannedDays.forEach(day => {
        const items     = foodItems.filter(f => weeklyPlanner[day].includes(f.id));
        const totalCals = items.reduce((s, f) => s + f.calories, 0);

        doc.setFont("helvetica","bold"); doc.setFontSize(12); doc.setTextColor(0,80,26);
        doc.text(`${day}  (${totalCals} kcal)`, 15, y); y += 7;

        items.forEach(item => {
            doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(40);
            doc.text(`   * ${item.name} - ${item.calories} kcal (${item.nutrition})`, 15, y); y += 6;
            if (y > 270) { doc.addPage(); y = 20; }
        });
        y += 4;
        if (y > 265) { doc.addPage(); y = 20; }
    });

    doc.addPage();
    // Mini logo header on consolidated list page
    const logoB64b = renderLogoToBase64();
    doc.addImage(logoB64b, 'PNG', 12, 7, 42, 12.3);
    doc.setDrawColor(0, 80, 26); doc.setLineWidth(0.4);
    doc.line(12, 22, 198, 22);
    y = 30;
    doc.setFont("helvetica","bold"); doc.setFontSize(14); doc.setTextColor(0,80,26);
    doc.text("Consolidated Shopping List", 12, y); y += 10;

    const allItems = {};
    plannedDays.forEach(day => {
        foodItems.filter(f => weeklyPlanner[day].includes(f.id)).forEach(f => {
            allItems[f.name] = (allItems[f.name] || 0) + 1;
        });
    });
    Object.entries(allItems).forEach(([name, count]) => {
        doc.setFont("helvetica","normal"); doc.setFontSize(10); doc.setTextColor(40);
        doc.text(`[ ] ${name}${count > 1 ? ` (x${count} days)` : ''}`, 20, y); y += 7;
        if (y > 270) { doc.addPage(); y = 20; }
    });

    doc.save("MenuKe_Weekly_Plan.pdf");
    showToast('Shopping list downloaded!');
}

// ============================================================
// 12. TOAST
// ============================================================
function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}