# RecipeJS - Functional Cooking Companion
## Video Demo Script & Guide

### Demo Overview (3-5 minutes)
This video demonstrates a functional programming-based recipe filtering and sorting application built with vanilla JavaScript.

---

## 📺 Video Demo Script

### Part 1: Introduction (30 seconds)
```
"Welcome to RecipeJS - Your Functional Cooking Companion. 
This is a recipe application that demonstrates functional programming principles 
in JavaScript. We have 8 recipes with different difficulties and cooking times.

Today, I'll show you how filters and sorting work, 
and I'll explain the functional programming patterns used in the code."
```

### Part 2: Filter Demonstration (2 minutes)

#### 2.1 All Recipes Filter
```
"Let's start with the 'All Recipes' filter. 
[CLICK "All Recipes" button]
As you can see, this displays all 8 recipes in our database:
- Classic Spaghetti Carbonara (25 min, easy)
- Chicken Tikka Masala (45 min, medium)
- Homemade Croissants (180 min, hard)
- Greek Salad (15 min, easy)
- Beef Wellington (120 min, hard)
- Vegetable Stir Fry (20 min, easy)
- Pad Thai (30 min, medium)
- Margherita Pizza (60 min, medium)
"
```

#### 2.2 Easy Recipes Filter
```
"Now let's click the 'Easy Recipes' filter.
[CLICK "Easy Recipes" button]
Notice how it shows only 3 recipes:
- Classic Spaghetti Carbonara (25 min)
- Greek Salad (15 min)
- Vegetable Stir Fry (20 min)

The Easy filter uses JavaScript's .filter() method to check each recipe's 
difficulty property and only return those with difficulty === 'easy'.
This is a pure function - it doesn't modify the original recipes array."
```

#### 2.3 Medium Recipes Filter
```
"Let's try the 'Medium Recipes' filter.
[CLICK "Medium Recipes" button]
Now we see:
- Chicken Tikka Masala (45 min)
- Pad Thai (30 min)
- Margherita Pizza (60 min)

Same concept - it filters for difficulty === 'medium'."
```

#### 2.4 Hard Recipes Filter
```
"Hard Recipes filter:
[CLICK "Hard Recipes" button]
Shows 2 recipes:
- Homemade Croissants (180 min)
- Beef Wellington (120 min)

These are the most challenging recipes with difficulty === 'hard'."
```

#### 2.5 Quick Recipes Filter
```
"And finally, the 'Quick Recipes (< 30 min)' filter:
[CLICK "Quick Recipes" button]
This shows recipes that take less than 30 minutes:
- Greek Salad (15 min)
- Vegetable Stir Fry (20 min)
- Classic Spaghetti Carbonara (25 min)
- Pad Thai (30 min)

This filter is different - it checks the time property instead of difficulty.
It uses: recipe.time < 30"
```

### Part 3: Sorting Demonstration (1.5 minutes)

#### 3.1 Sort by Name A-Z
```
"Now let's look at sorting. First, let's go back to 'All Recipes' to see all options.
[CLICK "All Recipes" button]

[CLICK "Sort: Name (A–Z)" button]
Notice the recipes are now sorted alphabetically by title:
- Beef Wellington
- Chicken Tikka Masala
- Classic Spaghetti Carbonara
- Greek Salad
- Homemade Croissants
- Margherita Pizza
- Pad Thai
- Vegetable Stir Fry

The sorting uses JavaScript's .sort() method with localeCompare() 
for proper alphabetical ordering. Each recipe title is compared (a, b) 
and sorted in ascending order."
```

#### 3.2 Sort by Time (Fastest First)
```
"Let's click the 'Sort: Time (Fastest First)' button:
[CLICK "Sort: Time (Fastest First)" button]
Now recipes are sorted by cooking time:
- Greek Salad (15 min)
- Vegetable Stir Fry (20 min)
- Classic Spaghetti Carbonara (25 min)
- Pad Thai (30 min)
- Chicken Tikka Masala (45 min)
- Margherita Pizza (60 min)
- Beef Wellington (120 min)
- Homemade Croissants (180 min)

The sort uses: (a, b) => a.time - b.time
This sorts by time in ascending order - fastest first."
```

#### 3.3 Sort Toggle
```
"Watch what happens when I click the same sort button again:
[CLICK "Sort: Time (Fastest First)" button again]
The sort is removed! The recipes go back to their original order.
This is a toggle - clicking the active sort button turns it off.
This is implemented with a ternary operator: 
currentSort = currentSort === selectedSort ? null : selectedSort"
```

### Part 4: Combined Filter + Sort (1 minute)

```
"Now let's see how filters and sorting work together.

Let's filter for Easy recipes:
[CLICK "Easy Recipes" button]
We see: Greek Salad, Spaghetti Carbonara, Vegetable Stir Fry

Now let's sort by time:
[CLICK "Sort: Time (Fastest First)" button]
Notice they're now sorted:
- Vegetable Stir Fry (20 min)
- Classic Spaghetti Carbonara (25 min)
- Greek Salad (15 min)

Wait, let me try again with the correct order shown:
Actually: Greek Salad (15 min), Vegetable Stir Fry (20 min), Spaghetti Carbonara (25 min)

The system first applies the filter, then applies the sort on top of the filtered results.
This is exactly what the updateDisplay() function does."
```

### Part 5: Code Explanation (1.5-2 minutes)

#### 5.1 Data Structure
```
"Let's talk about the code. The recipes are stored in an array:
[SHOW CODE]
Each recipe has:
- id: unique identifier
- title: recipe name
- time: cooking time in minutes
- difficulty: 'easy', 'medium', or 'hard'
- description: what the recipe is about
- category: type of dish

The data never changes. We don't modify this array."
```

#### 5.2 Pure Functions
```
"The core of this app uses pure functions.

applyFilter() is a pure function:
[SHOW CODE]
const applyFilter = (recipesList, filterMode) => {
    if (filterMode === 'all') return recipesList;
    if (filterMode === 'quick') {
        return recipesList.filter((recipe) => recipe.time < 30);
    }
    return recipesList.filter((recipe) => recipe.difficulty === filterMode);
};

It takes input (recipes list and filter mode) and returns output (filtered recipes).
It has no side effects - it doesn't modify the original array.
Given the same input, it always produces the same output.

Similarly, applySort() is pure:
[SHOW CODE]
const applySort = (recipesList, sortMode) => {
    if (!sortMode) return recipesList;
    const copy = [...recipesList];  // ← Important: shallow copy!
    if (sortMode === 'name') {
        return copy.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortMode === 'time') {
        return copy.sort((a, b) => a.time - b.time);
    }
    return copy;
};

Notice: Before sorting, we make a shallow copy with the spread operator [...recipesList].
This ensures we don't mutate the original array.
If we sorted the original array directly, we'd lose the original order.
This copy is essential for immutability."
```

#### 5.3 Higher-Order Functions
```
"This code heavily uses higher-order functions - functions that take other functions as arguments.

.filter() is a higher-order function:
.filter((recipe) => recipe.time < 30)
Here, we pass an arrow function that returns true/false for each recipe.

.sort() is a higher-order function:
.sort((a, b) => a.time - b.time)
We pass a comparator function.

.map() transforms data:
recipesToRender.map(createRecipeCard)
Each recipe is passed to createRecipeCard() function.

.forEach() iterates and executes:
filterButtons.forEach((button) => { ... })
Each button element gets an event listener."
```

#### 5.4 Central Update Flow
```
"All the magic happens in the updateDisplay() function:
[SHOW CODE]
const updateDisplay = () => {
    const filtered = applyFilter(recipes, currentFilter);
    const sorted = applySort(filtered, currentSort);
    renderRecipes(sorted);
};

This is the central orchestration point:
1. First, we apply the filter to get filtered recipes
2. Then, we apply the sort on the filtered results
3. Finally, we render the sorted recipes to the DOM

This separation of concerns makes the code clean and testable.
Each function does one thing well."
```

#### 5.5 State Management
```
"The current filter and sort are tracked in state variables:
[SHOW CODE]
let currentFilter = 'all';
let currentSort = null;

When you click a button, these variables update:
[SHOW EVENT LISTENER CODE]
button.addEventListener('click', () => {
    const selectedFilter = button.getAttribute('data-filter');
    currentFilter = selectedFilter;
    updateDisplay();
});

For sorting, we have a toggle:
currentSort = currentSort === selectedSort ? null : selectedSort;

This means clicking 'Sort by Time' again will toggle it off."
```

#### 5.6 Immutability
```
"The key principle throughout: immutability.

We never modify the original recipes array.
Instead:
- applyFilter() returns a NEW filtered array
- applySort() creates a shallow copy, then sorts the copy

The original recipes array remains untouched at all times.
This is functional programming in action."
```

### Part 6: Summary (30 seconds)

```
"To summarize, this RecipeJS app demonstrates:

✓ Pure functions: applyFilter(), applySort(), createRecipeCard()
✓ Higher-order functions: .filter(), .sort(), .map(), .forEach()
✓ Immutability: Never mutating the original recipes array
✓ Composition: updateDisplay() combines filter → sort → render
✓ State management: currentFilter and currentSort track state

All of this follows functional programming principles.
The code is clean, testable, and easy to extend.

Thanks for watching RecipeJS - Your Functional Cooking Companion!"
```

---

## 🎬 Recording Tips

### Camera Setup
- Use VS Code with zoom level at 150-200% for code readability
- Have browser window visible side-by-side
- Clear desktop for distraction-free recording

### Recording Quality
- Use OBS Studio or similar for screen capture
- Resolution: 1080p or higher
- Frame rate: 30fps or higher
- Speak clearly, at moderate pace

### Timing Breakdown
- Intro: 30 seconds
- Filters: 2 minutes (30 seconds per filter)
- Sorting: 1.5 minutes
- Filter + Sort combo: 1 minute
- Code explanation: 1.5-2 minutes
- Summary: 30 seconds
- **Total: 6-7.5 minutes (aim for under 5 minutes by speaking faster)**

### Practice Tips
1. Record locally first, watch for clarity
2. Speak with confidence and enthusiasm
3. Pause briefly when clicking to show UI updates
4. Point at code elements when explaining

---

## 🎯 Demo Checklist

- [ ] App loads correctly at localhost:8000
- [ ] All 5 filters work and update correctly
- [ ] Both sorting options work
- [ ] Sort toggle (clicking active button) works
- [ ] Combined filter + sort works as expected
- [ ] Code is clearly visible in VS Code
- [ ] Audio is clear and at good volume
- [ ] Screen recording captures full demo (browser + code)
- [ ] Demo is under 5 minutes
- [ ] Camera/screen is in focus and readable

---

## 📊 Demo Flow Chart

```
[START]
   ↓
Show app and 8 recipes
   ↓
Demo filters: All → Easy → Medium → Hard → Quick
   ↓
Explain filter code (applyFilter function)
   ↓
Go back to All Recipes
   ↓
Demo sorting: Name A-Z
   ↓
Demo sorting: Time Fastest First
   ↓
Demo sort toggle (click again to remove)
   ↓
Explain sort code (applySort, immutability, shallow copy)
   ↓
Show combined filter + sort example
   ↓
Explain higher-order functions (.filter, .sort, .map)
   ↓
Explain updateDisplay() orchestration
   ↓
Explain immutability and state management
   ↓
Summary of functional programming concepts
   ↓
[END]
```

---

## 🔗 Links

- **GitHub Repo:** https://github.com/nitin358005/recipejs-functional-cooking
- **GitHub PR:** https://github.com/nitin358005/recipejs-functional-cooking/pull/new/feature/filters-and-sorting
- **Live Demo:** http://localhost:8000

---

## 📋 Recording Commands

### Start HTTP Server
```bash
cd c:\Users\Nitin\OneDrive\Desktop\recipejs-functional-cooking
python -m http.server 8000
```

### Open Code
```bash
code c:\Users\Nitin\OneDrive\Desktop\recipejs-functional-cooking
```

---

**Ready to record? Good luck! 🎬**
