// 1. DATASET: 47 Counties Mapped to Culinary Regions
const counties = [
    { name: "Mombasa", region: "Coast" }, { name: "Kwale", region: "Coast" }, { name: "Kilifi", region: "Coast" }, { name: "Tana River", region: "Coast" }, { name: "Lamu", region: "Coast" }, { name: "Taita-Taveta", region: "Coast" },
    { name: "Nairobi", region: "Nairobi" },
    { name: "Nyandarua", region: "Central" }, { name: "Nyeri", region: "Central" }, { name: "Kirinyaga", region: "Central" }, { name: "Murang'a", region: "Central" }, { name: "Kiambu", region: "Central" },
    { name: "Marsabit", region: "Eastern" }, { name: "Isiolo", region: "Eastern" }, { name: "Meru", region: "Eastern" }, { name: "Tharaka-Nithi", region: "Eastern" }, { name: "Embu", region: "Eastern" }, { name: "Kitui", region: "Eastern" }, { name: "Machakos", region: "Eastern" }, { name: "Makueni", region: "Eastern" },
    { name: "Turkana", region: "Rift Valley" }, { name: "West Pokot", region: "Rift Valley" }, { name: "Samburu", region: "Rift Valley" }, { name: "Trans-Nzoia", region: "Rift Valley" }, { name: "Uasin Gishu", region: "Rift Valley" }, { name: "Elgeyo-Marakwet", region: "Rift Valley" }, { name: "Nandi", region: "Rift Valley" }, { name: "Baringo", region: "Rift Valley" }, { name: "Laikipia", region: "Rift Valley" }, { name: "Nakuru", region: "Rift Valley" }, { name: "Narok", region: "Rift Valley" }, { name: "Kajiado", region: "Rift Valley" }, { name: "Kericho", region: "Rift Valley" }, { name: "Bomet", region: "Rift Valley" },
    { name: "Kakamega", region: "Western" }, { name: "Vihiga", region: "Western" }, { name: "Bungoma", region: "Western" }, { name: "Busia", region: "Western" },
    { name: "Siaya", region: "Nyanza" }, { name: "Kisumu", region: "Nyanza" }, { name: "Homa Bay", region: "Nyanza" }, { name: "Migori", region: "Nyanza" }, { name: "Kisii", region: "Nyanza" }, { name: "Nyamira", region: "Nyanza" },
    { name: "Garissa", region: "North Eastern" }, { name: "Wajir", region: "North Eastern" }, { name: "Mandera", region: "North Eastern" }
];

// 2. DATASET: Recipes with Nutrition, Calories, and Regions
const recipes = [
    { id: 1, name: "Tilapia & Ugali", region: "Nyanza", nutrition: "High Protein", type: "Omega-3 Rich", calories: 450, ingredients: ["Tilapia (1 whole)", "Maize Flour (2 cups)", "Kale (1 bunch)", "Onions (1)"], instructions: ["Clean and season the tilapia, then pan-fry until cooked.", "Mix maize flour with water to make ugali and cook until firm.", "Sauté onions and kale with a little oil and salt.", "Serve tilapia with ugali and greens."], img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500" },
    { id: 2, name: "Chicken Ingokho", region: "Western", nutrition: "High Protein", type: "Lean Meat", calories: 720, ingredients: ["Chicken (1 kg)", "Maize Flour (for ugali)", "Traditional Greens (e.g., sukuma wiki)"], instructions: ["Brown chicken pieces with onions and spices.", "Simmer with a little water until tender.", "Prepare ugali from maize flour.", "Serve chicken stew with ugali and wilted greens."], img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500" },
    { id: 5, name: "Mukimo & Beef Stew", region: "Central", nutrition: "High Fiber", type: "Slow Release Carb", calories: 780, ingredients: ["Potatoes (4)", "Maize (1 cup)", "Pumpkin Leaves (handful)", "Beef (500g)"], instructions: ["Cook beef stew slowly until tender with tomatoes and spices.", "Boil potatoes and maize, then mash together with pumpkin leaves to make mukimo.", "Serve mukimo with beef stew."], img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500" },
    { id: 8, name: "Camel Meat & Rice", region: "North Eastern", nutrition: "High Protein", type: "Iron Rich", calories: 680, ingredients: ["Camel Meat (500g)", "Rice (2 cups)", "Spices (cardamom, cloves)"], instructions: ["Slow-cook camel meat with spices until very tender.", "Cook rice separately and combine with meat juices.", "Adjust seasoning and serve."], img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500" },
    { id: 9, name: "Nyama Choma", region: "Nairobi", nutrition: "High Protein", type: "Urban Classic", calories: 920, ingredients: ["Goat Meat (1 kg)", "Kachumbari (tomato-onion salad)", "Ugali (as needed)"], instructions: ["Season and grill goat meat until charred and cooked to preference.", "Prepare kachumbari by mixing diced tomatoes, onions, lemon juice and salt.", "Serve nyama choma sliced with kachumbari and ugali."], img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500" },
    { id: 3, name: "Swahili Beef Pilau", region: "Coast", nutrition: "Balanced", type: "Energy Booster", calories: 810, ingredients: ["Rice (3 cups)", "Beef (500g)", "Pilau Masala (2 tbsp)"], instructions: ["Brown beef with onions and pilau masala.", "Add rice and water, then simmer until rice is cooked and flavorful.", "Fluff rice and serve with a side salad."], img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Food_Kenya_Pilau.jpg" },
    { id: 4, name: "Wali wa Nazi & Beans", region: "Coast", nutrition: "Vegetarian", type: "Plant Based", calories: 490, ingredients: ["Rice (2 cups)", "Coconut Milk (400ml)", "Yellow Beans (2 cups)"], instructions: ["Cook beans until tender.", "Cook rice in coconut milk and water until soft.", "Serve rice with beans and a sprinkle of fresh cilantro."], img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rice_and_coconut_milk_snacks.jpg" },
    { id: 6, name: "Githeri Stew", region: "Eastern", nutrition: "Vegetarian", type: "Fiber Rich", calories: 430, ingredients: ["Maize (1 cup)", "Beans (1 cup)", "Carrots (2)", "Onion (1)"], instructions: ["Soak and cook maize and beans until soft.", "Sauté onions and carrots, then add to the cooked githeri and simmer.", "Season and serve warm."], img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Githeri.jpg" },
    { id: 7, name: "Mursik & Managu", region: "Rift Valley", nutrition: "Probiotic", type: "Gut Health", calories: 410, ingredients: ["Millet Ugali (or maize)", "Milk (for mursik)", "Managu (green leaves)"], instructions: ["Prepare mursik (fermented milk) using traditional method or use plain cultured yogurt as substitute.", "Cook ugali from millet or maize flour.", "Quickly sauté managu with a little oil and salt.", "Serve ugali with managu and a side of mursik."], img: [
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Ugali%2C_Maini_and_Sukuma_managu.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/66/Traditional_Managu.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/ce/Traditional_Gourd_Used_by_the_Kipsigis_tribe_in_kenya..jpg"
    ] },
    { id: 10, name: "Matoke Stew", region: "Nyanza", nutrition: "Balanced", type: "Potassium Rich", calories: 460, ingredients: ["Green Bananas (matoke) 6-8", "Beef (300g)", "Tomatoes (3)"], instructions: ["Peel and steam matoke until soft.", "Prepare beef stew with tomatoes and spices.", "Combine matoke with stew to finish and serve."], img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Matoke_with_stew.jpg" }
];


// 3. STATE MANAGEMENT
let favorites = JSON.parse(localStorage.getItem('kenyanFavs')) || [];
let currentRegionRecipes = [];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weeklySchedule = JSON.parse(localStorage.getItem('weeklySchedule')) || {};

// 4. INITIALIZATION
window.onload = () => {
    const select = document.getElementById('county-select');
    // Sort counties alphabetically for better UX
    counties.sort((a, b) => a.name.localeCompare(b.name)).forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.name;
        opt.innerText = c.name;
        select.appendChild(opt);
    });
    displayFavorites();
    renderWeeklySchedule();
    setupHeaderSearch();
};

// 5. CORE LOGIC FUNCTIONS
function manualSelect() {
    const cityName = document.getElementById('county-select').value;
    const county = counties.find(c => c.name === cityName);
    
    if (county) {
        // 1. Update the Heading
        const heading = document.getElementById('location-heading');
        heading.innerHTML = `MenuKe for <span style="color:var(--ww-gold)">${county.name}</span>`;
        
        // 2. Filter the Data
        currentRegionRecipes = recipes.filter(r => r.region === county.region);
        
        // 3. Reveal the UI Sections
        document.getElementById('filter-bar').style.display = "block";
        document.getElementById('results').style.display = "block";
        
        // 4. Draw the Cards
        renderRecipes(currentRegionRecipes, 'recipe-list');
        
        // 5. Smooth Scroll to results (Optional but professional)
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }
}

function renderRecipes(data, targetId) {
    const container = document.getElementById(targetId);
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">No meals match this selection. Try a different filter!</p>`;
        return;
    }

    data.forEach(meal => {
        const assignedDay = Object.entries(weeklySchedule).find(([day, mealId]) => mealId === meal.id)?.[0] || null;

        const primaryImg = Array.isArray(meal.img) ? meal.img[0] : meal.img;
        const thumbHtml = Array.isArray(meal.img) ? `<div class="meal-thumbs" style="display:flex; gap:6px; margin-top:8px;">${meal.img.map(u => `<img src="${u}" style="width:42px; height:42px; object-fit:cover; border-radius:6px; border:1px solid #eee;">`).join('')}</div>` : '';

        container.innerHTML += `
            <div class="recipe-card">
                <div class="recipe-image" style="background-image: url('${primaryImg}')">
                    <span class="nutri-badge">${meal.nutrition}</span>
                </div>
                <button class="favorite-btn" data-id="${meal.id}">❤️</button>
                <div class="recipe-content">
                    <span class="type-tag">${meal.type}</span>
                    <h3>${meal.name}</h3>
                    <div class="calorie-label"><i class="fa-brands fa-nutritionix"></i> ${meal.calories} Calories</div>
                    <select class="day-selector" data-meal-id="${meal.id}" style="width: 100%; margin-top: 10px; padding: 8px; border-radius: 4px; border: 1px solid #ddd; font-size: 0.9rem;">
                        <option value="">📅 Assign to Day</option>
                        ${daysOfWeek.map(day => `<option value="${day}" ${assignedDay === day ? 'selected' : ''}>${day}</option>`).join('')}
                    </select>
                    ${thumbHtml}
                </div>
            </div>
        `;
    });

    
    // Attach event listeners to favorite buttons
    container.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            toggleFavorite(id);
        });
    });
    
    // Attach event listeners to day selectors
    container.querySelectorAll('.day-selector').forEach(selector => {
        selector.addEventListener('change', (e) => {
            const mealId = parseInt(selector.dataset.mealId);
            const day = e.target.value;
            assignMealToDay(mealId, day);
        });
    });
}

function applyCalorieFilter(mode, btn) {
    // Visual toggle for chips
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');

    let filtered = [];
    if (mode === 'low') {
        filtered = currentRegionRecipes.filter(r => r.calories < 500);
    } else if (mode === 'high') {
        filtered = currentRegionRecipes.filter(r => r.calories >= 600);
    } else {
        filtered = currentRegionRecipes;
    }
    renderRecipes(filtered, 'recipe-list');
}

function toggleFavorite(id) {
    const recipe = recipes.find(r => r.id === id);
    const index = favorites.findIndex(f => f.id === id);

    if (index === -1) {
        favorites.push(recipe);
        alert(`${recipe.name} added to favorites!`);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('kenyanFavs', JSON.stringify(favorites));
    displayFavorites();
}

function assignMealToDay(mealId, day) {
    // Remove this meal from any other day it's assigned to
    Object.keys(weeklySchedule).forEach(d => {
        if (weeklySchedule[d] === mealId) {
            delete weeklySchedule[d];
        }
    });
    
    // Assign to the new day (if a day is selected)
    if (day) {
        weeklySchedule[day] = mealId;
    }
    
    localStorage.setItem('weeklySchedule', JSON.stringify(weeklySchedule));
    renderWeeklySchedule();
}

// Function to Reset the Weekly Plan
function resetWeeklyPlan() {
    if(confirm("Are you sure you want to clear your entire weekly schedule?")) {
        weeklySchedule = {
            "Monday": null, "Tuesday": null, "Wednesday": null, "Thursday": null, "Friday": null, "Saturday": null, "Sunday": null
        };
        localStorage.setItem('weeklySchedule', JSON.stringify(weeklySchedule));
        renderWeeklySchedule();
    }
}

// Updated renderWeeklySchedule to include the Reset UI
function renderWeeklySchedule() {
    const grid = document.getElementById('weekly-grid');
    if (!grid) return;
    grid.innerHTML = "";
    
    // Check if the Reset button exists in the header, if not, add it
    const header = document.querySelector('#weekly-planner-section h2');
    if (header && !document.getElementById('reset-btn-container')) {
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        const resetContainer = document.createElement('div');
        resetContainer.id = 'reset-btn-container';
        resetContainer.innerHTML = `<button class="btn-action btn-reset" onclick="resetWeeklyPlan()"><i class="fa-solid fa-arrow-rotate-left"></i> Reset Week</button>`;
        header.appendChild(resetContainer);
    }

    daysOfWeek.forEach(day => {
        const mealId = weeklySchedule[day];
        const meal = mealId ? recipes.find(r => r.id === mealId) : null;
        
        const dayCard = document.createElement('div');
        dayCard.className = 'weekly-day-card';
        dayCard.style.cssText = `
            background: white;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            text-align: center;
            cursor: pointer;
            border: 2px solid #e6f0e9;
            transition: all 0.3s ease;
        `;
        
        if (meal) {
            const primaryImg = Array.isArray(meal.img) ? meal.img[0] : meal.img;
            const thumbHtml = Array.isArray(meal.img) ? `<div style="display:flex; gap:6px; justify-content:center; margin-top:6px;">${meal.img.map(u => `<img src="${u}" style="width:40px; height:40px; object-fit:cover; border-radius:6px; border:1px solid #eee;">`).join('')}</div>` : '';

            dayCard.style.borderColor = '#00501a';
            dayCard.innerHTML = `
                <strong style="color: #00501a; display: block; font-size: 0.85rem; margin-bottom: 6px;">${day}</strong>
                <div style="background-image: url('${primaryImg}'); background-size: cover; background-position: center; width: 100%; height: 60px; border-radius: 4px; margin-bottom: 6px;"></div>
                <p style="margin: 0; font-size: 0.75rem; font-weight: bold; color: #333;">${meal.name}</p>
                <span style="display: inline-block; background: ${meal.nutrition === 'High Protein' ? '#ffcccc' : meal.nutrition === 'Vegetarian' ? '#ccffcc' : '#ffffcc'}; color: #333; padding: 2px 6px; border-radius: 3px; font-size: 0.65rem; margin-top: 4px;">${meal.nutrition}</span>
                <button style="width: 100%; margin-top: 8px; padding: 6px; background: #ff6b6b; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem; font-weight: bold;" onclick="assignMealToDay(${meal.id}, '')">Remove</button>
                ${thumbHtml}
            `;
        } else {
            dayCard.innerHTML = `
                <strong style="color: #999; display: block; font-size: 0.85rem; margin-bottom: 10px;">${day}</strong>
                <p style="margin: 0; color: #bbb; font-size: 0.8rem;">No meal planned</p>
            `;
        }
        
        grid.appendChild(dayCard);
    });
}


function displayFavorites() {
    const favList = document.getElementById('favorites-list');
    const printBtn = document.getElementById('print-btn');
    const noFavs = document.getElementById('no-favs');
    const savedCountEl = document.getElementById('saved-count');

    if (favorites.length > 0) {
        if (savedCountEl) { savedCountEl.textContent = favorites.length; savedCountEl.style.display = 'inline-block'; }
        if(noFavs) noFavs.style.display = "none";
        if(printBtn) printBtn.style.display = "block";
        renderRecipes(favorites, 'favorites-list');
    } else {
        if (savedCountEl) { savedCountEl.textContent = '0'; savedCountEl.style.display = 'inline-block'; }
        if(noFavs) noFavs.style.display = "block";
        if(printBtn) printBtn.style.display = "none";
        favList.innerHTML = "";
    }
    updateHeaderFavBadge();
}

// 6. PDF GENERATION (Uses jsPDF & Weekly Schedule)
async function generateShoppingList() {
    // Get only the meals scheduled for this week
    const scheduledMeals = daysOfWeek
        .filter(day => weeklySchedule[day])
        .map(day => recipes.find(r => r.id === weeklySchedule[day]));
    
    if (scheduledMeals.length === 0) {
        alert('Please plan at least one meal for the week first!');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 80, 26);
    doc.text("MenuKe: Weekly Shopping List", 20, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
    
    // Show the schedule in the PDF with recipes (ingredients + steps)
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    let yPos = 40;

    doc.text("Your Weekly Plan (with recipes):", 20, yPos);
    yPos += 8;

    daysOfWeek.forEach(day => {
        const mealId = weeklySchedule[day];
        if (mealId) {
            const meal = recipes.find(r => r.id === mealId);
            // Day and meal title
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.text(`${day}: ${meal.name}`, 25, yPos);
            yPos += 7;

            // Ingredients for this recipe
            doc.setFont("helvetica", "italic");
            doc.setFontSize(9);
            doc.text("Ingredients:", 28, yPos);
            yPos += 6;
            doc.setFont("helvetica", "normal");
            meal.ingredients.forEach(ing => {
                doc.text(`- ${ing}`, 30, yPos);
                yPos += 5;
                if (yPos > 270) { doc.addPage(); yPos = 20; }
            });

            // Instructions / steps
            doc.setFont("helvetica", "italic");
            doc.setFontSize(9);
            doc.text("Steps:", 28, yPos);
            yPos += 6;
            doc.setFont("helvetica", "normal");
            meal.instructions.forEach((step, idx) => {
                const prefix = `${idx + 1}. `;
                const stepText = prefix + step;
                doc.text(stepText, 30, yPos);
                yPos += 5;
                if (yPos > 270) { doc.addPage(); yPos = 20; }
            });

            // small spacer between days
            yPos += 6;
            if (yPos > 260) { doc.addPage(); yPos = 20; }
        }
    });

    // Add page break before consolidated ingredients
    doc.addPage();
    yPos = 20;

    // Consolidate ingredients across scheduled meals
    const ingredientMap = {};
    scheduledMeals.forEach(meal => {
        meal.ingredients.forEach(ing => {
            ingredientMap[ing] = (ingredientMap[ing] || 0) + 1;
        });
    });

    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 80, 26);
    doc.setFontSize(12);
    doc.text("Consolidated Shopping List", 20, yPos);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    yPos += 12;

    Object.entries(ingredientMap).forEach(([ing, count]) => {
        const label = count > 1 ? `${ing} (needed for ${count} meals)` : ing;
        doc.text(`☐ ${label}`, 25, yPos);
        yPos += 6;
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
    });
    
    doc.save("MenuKe_Weekly_Shopping_List.pdf");
    alert('Shopping list downloaded!');
}

function detectLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser. Defaulting to Nairobi.');
        const nairobi = counties.find(c => c.name === "Nairobi");
        document.getElementById('county-select').value = "Nairobi";
        manualSelect();
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            const matchedCounty = findNearestCounty(latitude, longitude);
            document.getElementById('county-select').value = matchedCounty.name;
            manualSelect();
        },
        (error) => {
            console.warn('Geolocation error:', error.message);
            alert('Unable to detect location. Defaulting to Nairobi.');
            const nairobi = counties.find(c => c.name === "Nairobi");
            document.getElementById('county-select').value = "Nairobi";
            manualSelect();
        }
    );
}

// County approximate coordinates (lat, lon) for geolocation matching
const countyCoordinates = {
    "Mombasa": [-4.04, 39.67], "Kwale": [-4.25, 39.40], "Kilifi": [-3.27, 39.84], "Tana River": [-2.43, 40.30], "Lamu": [-2.28, 40.90], "Taita-Taveta": [-3.40, 38.28],
    "Nairobi": [-1.29, 36.82],
    "Nyandarua": [-0.55, 36.65], "Nyeri": [-0.43, 37.07], "Kirinyaga": [-0.54, 37.50], "Murang'a": [-0.67, 37.13], "Kiambu": [-1.17, 36.83],
    "Marsabit": [2.73, 37.98], "Isiolo": [0.35, 37.58], "Meru": [0.05, 37.65], "Tharaka-Nithi": [-0.35, 37.88], "Embu": [-0.50, 37.45], "Kitui": [-1.30, 38.40], "Machakos": [-2.27, 37.27], "Makueni": [-2.73, 38.13],
    "Turkana": [3.60, 35.60], "West Pokot": [1.40, 35.30], "Samburu": [1.08, 37.18], "Trans-Nzoia": [1.02, 35.03], "Uasin Gishu": [1.00, 34.77], "Elgeyo-Marakwet": [1.18, 35.30], "Nandi": [0.37, 34.95], "Baringo": [0.68, 36.13], "Laikipia": [-0.28, 36.63], "Nakuru": [-0.30, 36.15], "Narok": [-1.30, 35.87], "Kajiado": [-2.20, 36.78], "Kericho": [-0.37, 35.28], "Bomet": [-0.78, 35.33],
    "Kakamega": [0.28, 34.75], "Vihiga": [0.10, 34.75], "Bungoma": [0.58, 34.57], "Busia": [0.48, 34.11],
    "Siaya": [0.68, 34.28], "Kisumu": [-0.10, 34.77], "Homa Bay": [-0.68, 34.48], "Migori": [-1.07, 34.48], "Kisii": [-0.68, 34.78], "Nyamira": [-0.57, 35.13],
    "Garissa": [-0.45, 39.65], "Wajir": [1.73, 40.07], "Mandera": [3.85, 41.87]
};

function findNearestCounty(userLat, userLon) {
    if (!counties || counties.length === 0) {
        console.error('Counties array not initialized');
        return { name: 'Nairobi', region: 'Central' };
    }
    
    let nearest = counties[0];
    let minDistance = Infinity;
    
    for (const county of counties) {
        const [countyLat, countyLon] = countyCoordinates[county.name] || [0, 0];
        const distance = Math.sqrt(Math.pow(userLat - countyLat, 2) + Math.pow(userLon - countyLon, 2));
        
        if (distance < minDistance) {
            minDistance = distance;
            nearest = county;
        }
    }
    
    return nearest;
}

// Header search function
function setupHeaderSearch() {
    const searchInput = document.getElementById('recipe-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length === 0) return;
        
        const results = recipes.filter(r => 
            r.name.toLowerCase().includes(query) || 
            r.ingredients.some(ing => ing.toLowerCase().includes(query))
        );
        
        if (results.length > 0) {
            renderRecipes(results, 'recipe-list');
            document.getElementById('results').style.display = 'block';
            document.getElementById('location-heading').innerHTML = `Search Results for <span style="color:var(--ww-gold)">"${e.target.value}"</span>`;
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Update header favorites badge
function updateHeaderFavBadge() {
    const badgeEl = document.getElementById('header-fav-count');
    if (!badgeEl) return;
    
    if (favorites.length > 0) {
        badgeEl.textContent = favorites.length;
        badgeEl.classList.remove('hidden');
    } else {
        badgeEl.classList.add('hidden');
    }
}

// 7. EVENT LISTENER ATTACHMENT
window.addEventListener('DOMContentLoaded', () => {
    const countySelect = document.getElementById('county-select');
    const detectBtn = document.getElementById('detect-btn');
    const printBtn = document.getElementById('print-btn');

    if (countySelect) {
        countySelect.addEventListener('change', manualSelect);
    }
    
    if (detectBtn) {
        detectBtn.addEventListener('click', detectLocation);
    }
    
    if (printBtn) {
        printBtn.addEventListener('click', generateShoppingList);
    }
});