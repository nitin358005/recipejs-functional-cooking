# RecipeJS - Filters & Sorting Implementation

## Overview
This project implements a functional programming-based recipe filtering and sorting system. All functionality follows pure function principles and avoids mutating the original data.

## Features Implemented

### 1. Filter Buttons ✅
- **All Recipes** - Displays all 8 recipes
- **Easy Recipes** - Shows only easy difficulty recipes (3 recipes)
- **Medium Recipes** - Shows only medium difficulty recipes (3 recipes)
- **Hard Recipes** - Shows only hard difficulty recipes (2 recipes)
- **Quick Recipes (< 30 min)** - Shows recipes taking less than 30 minutes (4 recipes)

### 2. Sorting Buttons ✅
- **Sort: Name (A–Z)** - Alphabetically sorts recipes by title
- **Sort: Time (Fastest First)** - Sorts recipes by cooking time in ascending order
- Click same button again to toggle sort off

### 3. Functional Programming Principles

#### Pure Functions
All core logic uses pure functions with no side effects:

```javascript
// Pure: Returns new data without mutation
const applyFilter = (recipesList, filterMode) => {
    if (filterMode === 'all') return recipesList;
    if (filterMode === 'quick') {
        return recipesList.filter((recipe) => recipe.time < 30);
    }
    return recipesList.filter((recipe) => recipe.difficulty === filterMode);
};

// Pure: Creates shallow copy before sorting
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
```

#### Higher-Order Functions
Uses JavaScript's built-in higher-order functions:
- `.filter()` - Filters recipes based on criteria
- `.sort()` - Sorts recipes based on comparator
- `.map()` - Transforms recipe objects to HTML strings
- `.forEach()` - Iterates over button elements for event listeners

```javascript
// Higher-order function composition
const updateDisplay = () => {
    const filtered = applyFilter(recipes, currentFilter);      // filter
    const sorted = applySort(filtered, currentSort);           // sort
    renderRecipes(sorted);                                      // render
};

// .map() example
const recipeCardsHTML = recipesToRender
    .map(createRecipeCard)                                      // transform
    .join('');
```

#### Immutability
- Original `recipes` array is never mutated
- Filters return new filtered arrays
- Sorts create shallow copies before sorting: `const copy = [...recipesList]`
- State is managed in `currentFilter` and `currentSort` variables

#### Central Update Flow
```
Button Click
    ↓
updateDisplay() called
    ↓
applyFilter(recipes, currentFilter) → filtered array
    ↓
applySort(filtered, currentSort) → sorted array
    ↓
renderRecipes(sorted) → updates DOM
    ↓
setActiveButton() → updates button styles
```

## Code Structure

### State Management
```javascript
let currentFilter = 'all';      // Tracks active filter
let currentSort = null;         // Tracks active sort (null = no sort)
```

### Key Functions

| Function | Purpose | Type |
|----------|---------|------|
| `createRecipeCard(recipe)` | Creates HTML for single recipe | Pure |
| `renderRecipes(recipesToRender)` | Updates DOM with recipes | Side-effect only |
| `applyFilter(list, mode)` | Filters recipes by criteria | Pure |
| `applySort(list, mode)` | Sorts recipes by criteria | Pure |
| `updateDisplay()` | Orchestrates filter → sort → render | Composition |
| `setActiveButton(buttons, attr, value)` | Updates button styles | DOM Mutation |

## Example Flows

### Filter by Easy + Sort by Name
```
recipes (8 items)
  ↓
applyFilter('easy')
  → [Greek Salad, Spaghetti Carbonara, Vegetable Stir Fry]
  ↓
applySort('name')
  → [Greek Salad, Spaghetti Carbonara, Vegetable Stir Fry]
  ↓
Renders 3 easy recipes sorted A-Z
```

### Filter Quick + Sort by Time
```
recipes (8 items)
  ↓
applyFilter('quick')
  → [Greek Salad(15), Vegetable Stir Fry(20), Spaghetti Carbonara(25), Pad Thai(30)]
  ↓
applySort('time')
  → [Greek Salad(15), Vegetable Stir Fry(20), Spaghetti Carbonara(25), Pad Thai(30)]
  ↓
Renders 4 quick recipes sorted by time
```

## Test Cases

### Filters Working
- ✅ All Recipes: Shows all 8 recipes
- ✅ Easy: Shows 3 recipes (Carbonara, Salad, Stir Fry)
- ✅ Medium: Shows 3 recipes (Tikka Masala, Pad Thai, Pizza)
- ✅ Hard: Shows 2 recipes (Croissants, Wellington)
- ✅ Quick: Shows 4 recipes (Salad, Stir Fry, Carbonara, Pad Thai)

### Sorting Working
- ✅ Name A-Z: Recipes sorted alphabetically
- ✅ Time Fastest: Recipes sorted by time ascending
- ✅ Toggle Off: Clicking active sort button removes sort

### Functional Programming
- ✅ No mutation of original `recipes` array
- ✅ Pure functions for filtering and sorting
- ✅ Higher-order functions (.filter, .sort, .map)
- ✅ Immutable updates via state variables
- ✅ Shallow copy before sorting

## Technologies Used
- **JavaScript (ES6+)**: Arrow functions, const/let, destructuring, spread operator
- **HTML5**: Semantic markup with data attributes
- **CSS3**: Flexbox layout, gradients, animations, responsive design

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Requires transpilation (uses ES6 features)

## Performance Notes
- Each render creates new HTML strings (acceptable for 8 recipes)
- Shallow copy for sorting is O(n) space, negligible for small datasets
- Event listeners attached once at init (delegated in newer implementations)

## Future Improvements
- Search/filter by recipe name or category
- Multiple filter combinations (AND logic)
- Persistent sort preference via localStorage
- Animation transitions when filtering/sorting
- Recipe detail view modal
