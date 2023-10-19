# HatBuilder Component Structure

## Options for Structuring JavaScript

### Option 1: Single Main JS File
**Pros:**
- Easier to manage initially.
- All logic in one place, making it easier to understand the flow.

**Cons:**
- As the project grows, this file can become unwieldy.
- Harder to locate specific functionalities.

### Option 2: Multiple JS Files for Each Snippet
**Pros:**
- Easier to locate specific functionalities.
- More modular and easier to manage as the project grows.

**Cons:**
- More files to manage.
- Potential for code duplication if not carefully managed.

### Option 3: JS Logic Inside Each Liquid File
**Pros:**
- Extremely easy to locate specific functionalities.
- No need to switch between files.

**Cons:**
- Mixing HTML and JS can become messy.
- Harder to reuse code.

---

## Recommended Approach

### 1. Main Liquid File (`HatBuilderSection.liquid`)
- Main layout file.
- Includes all other Liquid snippets.
- Links to main CSS and JS files.

### 2. Liquid Snippets
- Separate Liquid files for each part (`HatBuilderHeader.liquid`, `HatBuilderToggle.liquid`, etc.).
- Contains HTML and possibly some Liquid logic specific to that snippet.

### 3. Main JS File (`HatBuilderMain.js`)
- Contains core logic affecting the entire component.
- Initializes variables used across multiple snippets.

### 4. Child JS Files
- Separate JS files for each snippet (`HatBuilderHeader.js`, `HatBuilderToggle.js`, etc.).
- Contains JavaScript logic specific to that snippet.

### 5. CSS Files
- Separate CSS files for each snippet.
