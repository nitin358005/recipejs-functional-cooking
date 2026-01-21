// Recipe data with steps and ingredients
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g Pecorino cheese", "Black pepper", "Salt"],
        steps: [
            "Bring a large pot of salted water to boil",
            "Cook spaghetti according to package directions until al dente",
            "While pasta cooks, cut pancetta into small pieces and fry until crispy",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Beat eggs in a bowl",
                    "Mix in grated Pecorino cheese",
                    "Add plenty of black pepper"
                ]
            },
            "Drain pasta, reserving 1 cup pasta water",
            "Remove pan from heat and add hot spaghetti to pancetta",
            "Quickly add egg mixture while tossing constantly",
            "Add pasta water as needed to create a creamy sauce",
            "Serve immediately with extra cheese"
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: ["600g chicken breast", "200g yogurt", "400ml coconut milk", "2 onions", "3 tomatoes", "Tikka spice blend", "Garlic", "Ginger", "Oil"],
        steps: [
            {
                text: "Marinate chicken",
                substeps: [
                    "Cut chicken into bite-sized pieces",
                    "Mix yogurt with tikka spices",
                    "Coat chicken and marinate for 30 minutes"
                ]
            },
            "Heat oil in a large pan and cook chicken until golden",
            "Remove chicken and set aside",
            "In the same pan, sauté onions, garlic, and ginger",
            "Add tomatoes and cook until soft",
            "Stir in coconut milk",
            "Return chicken to pan and simmer for 15 minutes",
            "Season to taste and serve with rice or naan"
        ]
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: ["500g flour", "300g butter", "10g salt", "50g sugar", "7g instant yeast", "250ml water"],
        steps: [
            "Mix flour, salt, sugar, and yeast in a bowl",
            "Add water and mix until dough forms",
            "Knead for 10 minutes until smooth",
            {
                text: "Lamination process (the magic happens here)",
                substeps: [
                    "Roll dough into a rectangle",
                    "Pound cold butter flat and place on dough",
                    "Fold and roll dough 4 times, resting between folds",
                    "Each fold creates layers of butter and dough"
                ]
            },
            "Cut dough into triangles",
            "Roll each triangle tightly into a crescent shape",
            "Place on baking sheet and let rise for 2 hours",
            "Brush with egg wash and bake at 200°C for 20 minutes until golden"
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: ["4 tomatoes", "1 cucumber", "1 red onion", "200g feta cheese", "200g Kalamata olives", "Olive oil", "Oregano", "Salt", "Pepper"],
        steps: [
            "Chop tomatoes into chunks",
            "Chop cucumber into chunks",
            "Slice red onion thinly",
            "Crumble feta cheese",
            "Combine all vegetables in a large bowl",
            "Add olives",
            "Drizzle with olive oil",
            "Season with oregano, salt, and pepper",
            "Toss gently and serve"
        ]
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: ["1kg beef fillet", "500g mushrooms", "2 shallots", "500g puff pastry", "200g pâté", "Egg yolk", "Thyme"],
        steps: [
            "Sear beef fillet on all sides until brown",
            "Cool and spread pâté over beef",
            {
                text: "Prepare mushroom duxelles",
                substeps: [
                    "Finely chop mushrooms and shallots",
                    "Cook in butter until liquid evaporates",
                    "Season with thyme and salt",
                    "Cool completely"
                ]
            },
            "Spread cooled duxelles over pâté",
            "Wrap beef tightly with plastic wrap",
            "Chill for 30 minutes",
            "Wrap in puff pastry",
            "Brush with beaten egg yolk",
            "Bake at 200°C for 25-30 minutes until pastry is golden"
        ]
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: ["2 bell peppers", "1 broccoli head", "2 carrots", "100g snap peas", "3 garlic cloves", "Oil", "Soy sauce", "Ginger"],
        steps: [
            "Chop all vegetables into bite-sized pieces",
            "Heat oil in a wok or large pan over high heat",
            "Add garlic and ginger, stir-fry for 30 seconds",
            "Add carrots and broccoli, stir-fry for 3 minutes",
            "Add bell peppers and snap peas",
            "Stir-fry for another 2-3 minutes",
            "Add soy sauce to taste",
            "Serve immediately over rice"
        ]
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: ["300g rice noodles", "300g shrimp", "3 eggs", "200g bean sprouts", "3 green onions", "Tamarind paste", "Fish sauce", "Lime", "Peanuts"],
        steps: [
            "Soak rice noodles in warm water for 30 minutes, then drain",
            "Heat oil in a wok and cook shrimp until pink",
            "Remove shrimp and set aside",
            "Scramble eggs in the wok and push aside",
            "Add drained noodles and stir-fry",
            "Add tamarind paste and fish sauce",
            "Return shrimp to wok",
            "Toss in bean sprouts and green onions",
            "Serve with lime wedges and crushed peanuts"
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: ["500g pizza dough", "400g crushed tomatoes", "300g fresh mozzarella", "Fresh basil leaves", "Olive oil", "Salt", "Garlic"],
        steps: [
            "Preheat oven to 250°C (480°F)",
            "Stretch pizza dough into a 12-inch circle",
            "Place on pizza stone or baking sheet",
            "Brush lightly with olive oil",
            "Spread crushed tomatoes evenly, leaving a border",
            "Season with salt and minced garlic",
            "Tear mozzarella into chunks and distribute over sauce",
            "Drizzle with olive oil",
            "Bake for 12-15 minutes until crust is golden and cheese is bubbly",
            "Remove from oven and tear fresh basil on top",
            "Drizzle with more olive oil and serve"
        ]
    }
];

// IIFE - Immediately Invoked Function Expression
// Wraps all functionality to avoid global namespace pollution
const RecipeApp = (() => {
    // Private variables - only accessible within this IIFE
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filters button');
    const sortButtons = document.querySelectorAll('.sorters button');
    const searchInput = document.querySelector('#search-input');
    const recipeCounter = document.querySelector('#recipe-counter');
    
    let currentFilter = 'all';
    let currentSort = null;
    let searchQuery = '';
    let favorites = []; // Store favorite recipe IDs
    let expandedCards = {}; // Track which cards are expanded
    let debounceTimer = null;
    
    // localStorage keys
    const FAVORITES_STORAGE_KEY = 'recipeAppFavorites';

    // localStorage functions
    const saveFavorites = () => {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    };

    const loadFavorites = () => {
        const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
        favorites = stored ? JSON.parse(stored) : [];
    };

    // Toggle favorite status
    const toggleFavorite = (recipeId) => {
        const index = favorites.indexOf(recipeId);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(recipeId);
        }
        saveFavorites();
        updateDisplay();
    };

    // Check if recipe is favorited
    const isFavorited = (recipeId) => favorites.includes(recipeId);

    // Debounced search function
    const handleSearchInput = (query) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = query.toLowerCase().trim();
            updateDisplay();
        }, 300); // 300ms debounce delay
    };

    // RECURSIVE FUNCTION: Render nested steps
    // This function calls itself to handle multiple levels of nesting
    const renderSteps = (steps, level = 0) => {
        return steps.map((step, index) => {
            if (typeof step === 'string') {
                // Base case: simple string step
                return `<li style="margin-left: ${level * 20}px">
                    <span class="step-number">${index + 1}</span>
                    <span class="step-text">${step}</span>
                </li>`;
            } else if (step.substeps) {
                // Recursive case: step with nested substeps
                return `<li style="margin-left: ${level * 20}px">
                    <span class="step-number">${index + 1}</span>
                    <span class="step-text"><strong>${step.text}</strong></span>
                    <ul class="substeps">
                        ${renderSteps(step.substeps, level + 1).join('')}
                    </ul>
                </li>`;
            }
        }).join('');
    };

    // Render ingredients list
    const renderIngredients = (ingredients) => {
        return ingredients.map((ingredient) => 
            `<li><span class="ingredient-item">${ingredient}</span></li>`
        ).join('');
    };

    // Pure function: create HTML for a single recipe card
    const createRecipeCard = (recipe) => {
        const isFav = isFavorited(recipe.id);
        const heartIcon = isFav ? '❤️' : '🤍';
        
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <div class="card-header">
                    <div class="card-title-row">
                        <h3>${recipe.title}</h3>
                        <button class="favorite-btn" data-recipe-id="${recipe.id}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                            ${heartIcon}
                        </button>
                    </div>
                    <div class="recipe-meta">
                        <span>⏱️ ${recipe.time} min</span>
                        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                    </div>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                
                <div class="card-actions">
                    <button class="toggle-btn show-ingredients" data-recipe-id="${recipe.id}" data-section="ingredients">
                        📋 Ingredients
                    </button>
                    <button class="toggle-btn show-steps" data-recipe-id="${recipe.id}" data-section="steps">
                        👨‍🍳 Steps
                    </button>
                </div>
                
                <div class="recipe-section ingredients-section" id="ingredients-${recipe.id}" style="display: none;">
                    <h4>Ingredients</h4>
                    <ul class="ingredients-list">
                        ${renderIngredients(recipe.ingredients)}
                    </ul>
                </div>
                
                <div class="recipe-section steps-section" id="steps-${recipe.id}" style="display: none;">
                    <h4>Cooking Steps</h4>
                    <ol class="steps-list">
                        ${renderSteps(recipe.steps)}
                    </ol>
                </div>
            </div>
        `;
    };

    // Render recipes to DOM
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender
            .map(createRecipeCard)
            .join('');
        recipeContainer.innerHTML = recipeCardsHTML;
        updateRecipeCounter(recipesToRender.length);
        attachEventListeners();
    };

    // Update recipe counter display
    const updateRecipeCounter = (currentCount) => {
        const totalRecipes = recipes.length;
        recipeCounter.textContent = `Showing ${currentCount} of ${totalRecipes} recipes`;
    };

    // Pure function: filter recipes based on mode
    const applyFilter = (recipesList, filterMode) => {
        if (filterMode === 'favorites') {
            return recipesList.filter((recipe) => favorites.includes(recipe.id));
        }
        if (filterMode === 'all') return recipesList;
        if (filterMode === 'quick') {
            return recipesList.filter((recipe) => recipe.time < 30);
        }
        return recipesList.filter((recipe) => recipe.difficulty === filterMode);
    };

    // Pure function: search recipes by title and ingredients
    const applySearch = (recipesList, query) => {
        if (!query) return recipesList;
        
        return recipesList.filter((recipe) => {
            const titleMatch = recipe.title.toLowerCase().includes(query);
            const ingredientMatch = recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(query)
            );
            return titleMatch || ingredientMatch;
        });
    };

    // Pure function: sort recipes based on mode
    const applySort = (recipesList, sortMode) => {
        if (!sortMode) return recipesList;
        const copy = [...recipesList];
        if (sortMode === 'name') {
            return copy.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (sortMode === 'time') {
            return copy.sort((a, b) => a.time - b.time);
        }
        return copy;
    };

    // Central update function
    const updateDisplay = () => {
        let filtered = applyFilter(recipes, currentFilter);
        filtered = applySearch(filtered, searchQuery);
        const sorted = applySort(filtered, currentSort);
        renderRecipes(sorted);
    };

    // Helper: update active button styles
    const setActiveButton = (buttons, activeAttr, value) => {
        buttons.forEach((btn) => {
            if (btn.getAttribute(activeAttr) === value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Toggle recipe section visibility
    const toggleRecipeSection = (recipeId, section) => {
        const sectionElement = document.getElementById(`${section}-${recipeId}`);
        if (sectionElement) {
            const isHidden = sectionElement.style.display === 'none';
            sectionElement.style.display = isHidden ? 'block' : 'none';
        }
    };

    // Attach event listeners to recipe cards
    // Using event delegation for better performance
    const attachEventListeners = () => {
        recipeContainer.addEventListener('click', (e) => {
            // Handle favorite button clicks
            if (e.target.classList.contains('favorite-btn')) {
                const recipeId = parseInt(e.target.getAttribute('data-recipe-id'));
                toggleFavorite(recipeId);
                return;
            }
            
            // Handle toggle section buttons
            if (e.target.classList.contains('toggle-btn')) {
                const recipeId = e.target.getAttribute('data-recipe-id');
                const section = e.target.getAttribute('data-section');
                toggleRecipeSection(recipeId, section);
                
                // Update button text
                e.target.textContent = 
                    document.getElementById(`${section}-${recipeId}`).style.display === 'none'
                        ? (section === 'ingredients' ? '📋 Ingredients' : '👨‍🍳 Steps')
                        : (section === 'ingredients' ? '📋 Hide Ingredients' : '👨‍🍳 Hide Steps');
            }
        });
    };

    // Attach filter button listeners
    const attachFilterListeners = () => {
        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const selectedFilter = button.getAttribute('data-filter');
                currentFilter = selectedFilter;
                setActiveButton(filterButtons, 'data-filter', selectedFilter);
                updateDisplay();
            });
        });
    };

    // Attach sort button listeners
    const attachSortListeners = () => {
        sortButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const selectedSort = button.getAttribute('data-sort');
                currentSort = currentSort === selectedSort ? null : selectedSort;
                setActiveButton(sortButtons, 'data-sort', currentSort);
                updateDisplay();
            });
        });
    };

    // Attach search input listener
    const attachSearchListener = () => {
        searchInput.addEventListener('input', (e) => {
            handleSearchInput(e.target.value);
        });
    };

    // Public API - only init method is exposed
    return {
        init: () => {
            loadFavorites(); // Load favorites from localStorage
            attachFilterListeners();
            attachSortListeners();
            attachSearchListener();
            updateDisplay();
        }
    };
})();

// Initialize the app
RecipeApp.init();