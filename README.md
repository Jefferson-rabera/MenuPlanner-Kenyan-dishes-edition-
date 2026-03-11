# MenuKe — Kenyan Regional Meal Planner

> Plan your week around Kenya's 47 counties and 8 culinary regions.

A web-based meal planning app where you select your county, browse regionally appropriate food items, build a daily plate, and plan your full week — then download a PDF shopping list.

---

## Project Structure

```
MenuPlanner-Kenyan-dishes-edition/
├── index.html          # App shell — HTML structure only
├── script.js           # All JavaScript — data, state, 20 functions
├── styles.css          # All CSS styling
├── server.js           # Node.js proxy server (required to run the app)
└── package.json        # Node project config
```

---

## Running the App

> **Important:** You must open the app through the Node.js server. Opening `index.html` directly in a browser will not work — food images depend on the proxy server.

### Step 1 — Install Node.js *(first time only)*

Download and install the LTS version from [nodejs.org](https://nodejs.org).

### Step 2 — Start the server

```powershell
cd "C:\path\to\MenuPlanner-Kenyan-dishes-edition"
node server.js
```

You should see:

```
  MenuKe server running
  Open: http://localhost:3000
```

### Step 3 — Open the app

Go to **[http://localhost:3000](http://localhost:3000)** in your browser.

To stop the server press `Ctrl + C` in the terminal.

---

## How It Works

**County selection**
Choose from all 47 Kenyan counties via the dropdown, or click *Auto-Detect My County* which uses your device's geolocation to find the nearest county automatically.

**Food items**
Each county maps to one of 8 regions — Nyanza, Western, Central, Nairobi, Coast, Rift Valley, Eastern, North Eastern. Selecting a county reveals food items for that region, filterable by category (Protein, Carb, Side, Drink, Snack) or searchable by name.

**Plate builder**
Click *Add to My Plate* on any food card. The plate section shows your selected items as chips, a running calorie total, and a nutrition summary. Items can be removed individually or the whole plate cleared. The plate resets when you switch county.

**Weekly planner**
Once your plate is built, assign it to any day of the week. The weekly grid shows all 7 days — filled days show a thumbnail of each food item with its calorie count. Individual days can be cleared, or the whole week reset. **The weekly plan persists across browser sessions** using localStorage.

**PDF download**
Generates a two-page PDF: page one shows the day-by-day plate breakdown with calorie totals, page two shows a consolidated shopping list with items marked with how many days they appear.

---

## Image System

Food card images use a **hybrid approach** — Unsplash for generic dishes it photographs well, Wikimedia Commons for specifically Kenyan dishes that require accurate dedicated images.

### Unsplash — 22 items (via proxy)

The Node.js server proxies requests to the Unsplash API so the API key is never exposed in the browser. Each item has a **curated descriptive search term** in English (e.g. `"grilled goat meat roasted charcoal smoke platter kenya"`) chosen to return visually accurate results.

Images are **cached in server memory** so each item is fetched only once per session. Cards render immediately with a fallback URL, then update silently once Unsplash responds.

### Wikimedia Commons — 6 items (static URL)

| Item | Reason |
|------|--------|
| Sukuma Wiki | Accurate dedicated image in Wikimedia |
| Matoke (Steamed Bananas) | Accurate dedicated image in Wikimedia |
| Githeri | Accurate dedicated image in Wikimedia |
| Pilau Rice | Kenyan pilau specifically photographed in Wikimedia |
| Managu (African Nightshade) | Accurate dedicated image in Wikimedia |
| Camel Milk (Suusa) | Accurate dedicated image in Wikimedia |

### Fallback behaviour

If the server is unreachable or Unsplash returns no result, every card falls back to its hardcoded static URL gracefully — no broken images.

### API key security

The Unsplash Access Key lives **only in `server.js`** and is never sent to the browser or included in any client-side file.

---

## Data

**28 food items** across 8 regions, each with:

- `id` — unique identifier (region-prefixed, e.g. 101 = Nyanza item 1)
- `name` — display name including local Kenyan name where applicable
- `region[]` — array of regions where the dish is eaten
- `category` — Protein / Carb / Side / Drink / Snack
- `calories` — approximate kcal per serving
- `nutrition` — primary nutrition label (e.g. High Protein, High Fiber, Probiotic)
- `type` — food character tag (e.g. Omega-3 Rich, Street Food, Slow Release Carb)
- `img` — fallback static image URL

**47 counties** mapped to 8 regions, with lat/lon coordinates for geolocation.

**6 filter categories** — All, Protein, Carb, Side, Drink, Snack

---

## State & Storage

| Key | Where stored | Lifetime | Contents |
|-----|-------------|----------|----------|
| `menuKeWeekly` | localStorage | Permanent | Weekly planner — survives refresh and browser close |
| `currentPlate` | Memory | Until county change or refresh | Items currently being built |
| `currentRegion` | Memory | Until refresh | Active region from selected county |
| `currentCategoryFilter` | Memory | Until refresh | Active category filter chip |
| `imgCache` | Memory | Until server restart | Unsplash URLs cached per session |

---

## Functions Reference

| Function | Purpose |
|----------|---------|
| `manualSelect()` | County dropdown change → set region, render food grid and plate |
| `detectLocation()` | Geolocation → find nearest county → call manualSelect |
| `findNearestCounty(lat, lon)` | Euclidean distance across county coordinates |
| `getRegionItems()` | Filter foodItems by currentRegion |
| `renderCategoryFilters()` | Build filter chip bar |
| `renderFoodItems()` | Render food cards, trigger Unsplash prefetch |
| `togglePlateItem(id)` | Add or remove item from currentPlate |
| `renderPlate()` | Update plate chips, calorie total, nutrition pills |
| `clearPlate()` | Empty currentPlate |
| `assignPlateToDay()` | Save currentPlate to weeklyPlanner[day] + localStorage |
| `renderWeeklyPlanner()` | Render 7-day grid |
| `removeDayPlan(day)` | Clear one day from planner |
| `resetWeeklyPlan()` | Clear entire week with confirm prompt |
| `updateDownloadBtn()` | Show/hide PDF download button based on planner content |
| `getUnsplashImage(item)` | Fetch image from proxy or return static URL |
| `prefetchAndUpdateImages(items)` | Parallel fetch all images, update DOM cards |
| `handleSearch(e)` | Search food items by name/type/nutrition |
| `renderLogoToBase64()` | Return embedded MenuKe logo for PDF header |
| `generateShoppingList()` | Export weekly plan + shopping list as PDF |
| `showToast(msg)` | Slide-up notification toast |

---

## Dependencies

| Dependency | Version | Purpose | How loaded |
|---|---|---|---|
| jsPDF | 2.5.1 | PDF generation | cdnjs CDN |
| Font Awesome | 6.5.1 | UI icons | cdnjs CDN |
| Node.js | LTS | HTTP server, Unsplash proxy | Installed locally |

No npm packages are required. `package.json` is included for future dependency management.

---

## Browser Support

Works in all modern browsers — Chrome, Firefox, Edge, Safari.

Requires an active internet connection for food images (Unsplash + Wikimedia). Geolocation for auto-detect is optional — manual county selection always works.