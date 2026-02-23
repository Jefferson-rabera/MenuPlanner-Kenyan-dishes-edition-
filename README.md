# Kenyan Meal Planner — MenuKe

A lightweight client-side Meal Planner focused on Kenyan regional dishes. This small web app helps users discover regional recipes, schedule meals for a week, and generate a printable weekly shopping list (PDF) including recipe ingredients and step-by-step instructions.

---

## Features

- **Discover recipes by county/region:** Pick a county and view recipes curated for that region.
- **Favorites:** Mark recipes as favorites for quick access.
- **Weekly planner:** Assign recipes to days of the week in a simple planner UI.
- **Printable shopping list (PDF):** Click the print button to generate a PDF that includes each scheduled meal with ingredients and numbered cooking steps, plus a consolidated shopping checklist.
- **Image thumbnails:** Recipe images may be single URLs or an array of image URLs (primary + thumbnails).

---

## Project Structure

- `index.html` — UI shell and script/style includes.
- `script.js` — Core application logic: dataset (`recipes`), rendering, scheduling, favorites, and PDF generation.
- `styles.css` — App styles.

Files are in the project root. Open [index.html](index.html) in a browser to run the app.

---

## Getting Started (Local)

Prerequisites: any modern browser (Chrome/Firefox/Edge) with JavaScript enabled.

1. Clone or download the project folder to your machine.
2. Open the project folder and double-click `index.html` or serve it with a simple local server (recommended if you want to avoid some image/CORS quirks):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

3. Use the county selector to explore recipes, mark favorites, assign meals to days, and click the `Print Weekly Menu` / `Print Shopping List` button to download the PDF.

---

## How the Data Works

- Recipes are defined in `script.js` in the `recipes` array. Each recipe object includes fields such as `id`, `name`, `region`, `nutrition`, `type`, `calories`, `ingredients`, `instructions`, and `img`.
- `ingredients` is an array of strings used when constructing the consolidated shopping list.
- `instructions` is an array of step strings that are printed under each scheduled meal in the PDF.
- `img` may be either a single string URL or an array of string URLs. When an array is supplied, the app uses the first URL as the primary image and shows the others as thumbnails in the UI.

Example recipe snippet (from `script.js`):

```js
{
  id: 7,
  name: "Mursik & Managu",
  region: "Rift Valley",
  ingredients: ["Millet Ugali (or maize)", "Milk (for mursik)", "Managu (green leaves)"],
  instructions: ["Prepare mursik...", "Cook ugali...", "Sauté managu..."],
  img: ["https://.../ugali.jpg", "https://.../managu.jpg"]
}
```

---

## PDF Generation

- The PDF is generated client-side using jsPDF (included via CDN in `index.html`).
- Clicking the print button calls `generateShoppingList()` in `script.js`. That function:
  - Collects scheduled meals from `weeklySchedule` (stored in `localStorage`).
  - Writes each scheduled day with recipe name, ingredients list, and numbered steps.
  - Adds a consolidated shopping checklist summarizing ingredients across meals.

Notes: PDF text layout is simple — long lines may wrap; images are not embedded into the PDF by default.

---

## Image Sources & Licensing

- Several recipe images are remote URLs, including images sourced from Wikimedia Commons. When using third-party images in the app or for distribution, verify the license on the original file page and provide appropriate attribution if required.
- If you prefer to guarantee availability and remove external dependencies, download the desired image files and place them in the project directory (for example, `assets/images/`), then update the `img` fields in `script.js` to reference the local relative paths (e.g., `img: "assets/images/ugali.jpg"`).

Attribution example (some Commons images used in this repo):

- "Ugali, Maini and Sukuma managu.jpg" — Harmon Mutunga — CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Ugali,_Maini_and_Sukuma_managu.jpg
- "Traditional Managu.jpg" — Mmaua1 — CC BY 4.0 — https://commons.wikimedia.org/wiki/File:Traditional_Managu.jpg
- Traditional gourd image — Stephenwanjau — CC BY-SA 3.0 — https://commons.wikimedia.org/wiki/File:Traditional_Gourd_Used_by_the_Kipsigis_tribe_in_kenya..jpg

If you redistribute the app or include modified versions of images with share-alike licenses, ensure you comply with the license terms.

---

## Customization

- To add or edit recipes, open `script.js` and modify the `recipes` array. Keep `id` unique for each recipe.
- To change the PDF header or layout, edit `generateShoppingList()` in `script.js`.
- To change UI styling, edit `styles.css`.

---

## Troubleshooting

- Images not displaying: verify the URL is reachable (HTTP 200). For production stability, prefer local image files.
- PDF generation issues: make sure `jspdf` is loaded in `index.html`. If your browser blocks downloads from local files, run a local server and retry.
- LocalStorage not saving: check browser settings for storage privacy or open the browser console for errors.

---

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork or copy the project.
2. Make changes locally and test by opening `index.html` or serving via a local server.
3. If adding images, include them in an `assets/` folder and update `script.js` paths.
4. Submit a patch or copy the updated files back.

Please include image license/source information when adding new external images.

---

