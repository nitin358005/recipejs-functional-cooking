# Quick Test Guide - RecipeJS Enhanced Edition

## Setup
1. Open `index.html` in your browser
2. App should load with all 8 recipes visible
3. Search bar appears at the top
4. Recipe counter shows "Showing 8 of 8 recipes"

---

## Test Scenarios

### Scenario 1: Real-Time Search
**Expected Behavior**: Type in search bar, recipes filter in real-time

**Steps**:
1. Click in the search bar
2. Type: `pasta`
   - Should see only "Classic Spaghetti Carbonara" (1 recipe)
   - Counter shows "Showing 1 of 8 recipes"
3. Type: `egg` in the search box
   - Should see recipes with eggs in ingredients
   - Counter updates accordingly
4. Clear the search
   - All recipes return
   - Counter shows "Showing 8 of 8 recipes"

**Validation**: ✅ Works if recipes filter smoothly without lag

---

### Scenario 2: Favorites System
**Expected Behavior**: Click heart icons to save favorites

**Steps**:
1. Find "Classic Spaghetti Carbonara" card
2. Click the 🤍 (white heart) in top-right corner
   - Should change to ❤️ (red heart)
   - Card is marked as favorite
3. Mark 2-3 more recipes as favorites
4. **Refresh the page** (F5 or Ctrl+R)
   - All previously favorited recipes should still show ❤️
   - This confirms localStorage persistence works!
5. Click ❤️ to unfavorite a recipe
   - Should change back to 🤍

**Validation**: ✅ Works if favorites persist after page refresh

---

### Scenario 3: Favorites-Only Filter
**Expected Behavior**: View only your favorite recipes

**Steps**:
1. Make sure you have 3-4 favorites marked
2. Click the "❤️ Favorites Only" button
   - Button should turn gradient (active state)
   - Only your favorite recipes display
   - Counter shows correct count (e.g., "Showing 3 of 8 recipes")
3. Try searching while in Favorites view
   - Search should work within favorites only
   - Example: In Favorites, search "egg" → shows only favorited recipes with eggs
4. Click "❤️ Favorites Only" again to deselect
   - All recipes return

**Validation**: ✅ Works if filtering and searching work together smoothly

---

### Scenario 4: Recipe Counter
**Expected Behavior**: Counter always shows current filtered/searched count

**Test Cases**:
1. No filters: "Showing 8 of 8 recipes" ✓
2. Filter "Easy": "Showing 3 of 8 recipes" ✓
3. Search "chicken": "Showing 1 of 8 recipes" ✓
4. Filter "Easy" + Search "salad": "Showing 1 of 8 recipes" ✓
5. Favorites Only + 3 favorites: "Showing 3 of 8 recipes" ✓

**Validation**: ✅ Works if counter always matches visible recipes

---

### Scenario 5: All Features Together
**Expected Behavior**: Everything works smoothly together

**Steps**:
1. Mark 4 recipes as favorites
2. Click "Easy Recipes" filter
3. Type "salad" in search
4. Try sorting by name
5. Toggle favorites filter on/off
6. Clear search and filter
7. Refresh page

**Validation**: ✅ Works if no errors appear and all state updates correctly

---

### Scenario 6: Existing Features Still Work
**Expected Behavior**: Previous functionality untouched

**Test Cases**:
1. **Difficulty Filters**
   - Click "Medium Recipes" → shows medium difficulty recipes only
   - Badges show correct colors (green=easy, yellow=medium, red=hard)

2. **Quick Recipes Filter**
   - Click "Quick Recipes (< 30 min)" → shows only recipes under 30 minutes
   - "Pad Thai" (30 min) should NOT appear

3. **Sorting**
   - Sort: Name (A-Z) → recipes alphabetized
   - Sort: Time (Fastest First) → sorted by duration
   - Click sort button again → unsort (return to original order)

4. **Expandable Sections**
   - Click "📋 Ingredients" → shows ingredients with checkmarks
   - Button text changes to "📋 Hide Ingredients"
   - Click again to collapse
   - Same for "👨‍🍳 Steps"

**Validation**: ✅ Works if all old features function identically to before

---

### Scenario 7: Mobile Responsiveness
**Expected Behavior**: App works well on small screens

**Steps**:
1. Open DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)
2. Test sizes:
   - **Mobile (375px)**: 
     - Search bar full width ✓
     - Buttons stack properly ✓
     - Cards fit with padding ✓
   - **Tablet (768px)**:
     - Two cards side-by-side ✓
     - Recipe counter on new line ✓
   - **Desktop (1200px)**:
     - 3-4 cards per row ✓
     - Clean layout ✓

**Validation**: ✅ Works if layout adapts smoothly at different breakpoints

---

### Scenario 8: Browser DevTools localStorage Check
**Expected Behavior**: Verify favorites are stored correctly

**Steps**:
1. Open DevTools (F12)
2. Go to **Application** tab (or **Storage** in Firefox)
3. Click **Local Storage** in left sidebar
4. Find your site URL
5. Should see key: `recipeAppFavorites`
6. Value should be: `[1,3,5]` (example - actual numbers depend on your favorites)
7. Mark a new favorite
8. The localStorage value should update immediately

**Validation**: ✅ Works if localStorage shows updated favorites array

---

## Error Indicators

If you see any of these, check the console (F12 → Console tab):

❌ **JavaScript Error**: Red error message in console
- Check app.js syntax
- Verify all functions are declared correctly

❌ **Search Not Working**: Types in search bar but nothing happens
- Check that `searchInput` is found
- Verify debounce timer code

❌ **Favorites Not Persisting**: Favorites disappear after refresh
- Check localStorage key name matches
- Verify `saveFavorites()` and `loadFavorites()` are called

❌ **Counter Wrong**: Shows incorrect counts
- Check that filtered recipes array is correct
- Verify `updateRecipeCounter()` is called in `renderRecipes()`

---

## Performance Tips

**Your app is optimized for:**
- ⚡ Debounced search (300ms) prevents lag
- ⚡ Event delegation reduces memory usage
- ⚡ Pure functions for predictable filtering
- ⚡ localStorage for instant persistence

**Performance Check**:
- Typing in search should feel responsive (no delay)
- Clicking buttons should update instantly
- Favorites icon should change immediately

---

## Congratulations! 🎉

If all scenarios pass, your RecipeJS application is:
- ✅ Fully functional
- ✅ Production-ready
- ✅ Mobile-friendly
- ✅ Well-optimized
- ✅ Professionally coded

**Ready to deploy!**

