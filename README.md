# Hat Builder Component Overview

## Introduction HELLO!
This repository contains all the necessary files for the Hat Builder component, a feature-rich section that allows users to customize hats with various patches. The component is designed to be modular, easy to manage, and scalable.

## Component Structure
The Hat Builder component is organized into three main folders: `assets`, `snippets`, and `scripts`.

### Assets
- `hat-builder-main.css`: Main stylesheet for the Hat Builder component.
- `hat-builder-header.css`: Styles for the header section.
- `hat-builder-toggle.css`: Styles for the toggle buttons.
- `hat-builder-dropdown.css`: Styles for the drop-down menus.
- `hat-builder-carousel.css`: Styles for the carousel section.
- `hat-builder-footer.css`: Styles for the footer section.

### Snippets
- `hat-builder-section.liquid`: Main Liquid file that renders the entire Hat Builder component.
- `hat-builder-header.liquid`: Header section.
- `hat-builder-toggle.liquid`: Toggle buttons for patches and hats.
- `hat-builder-dropdown.liquid`: Drop-down menus for patches and hats.
- `hat-builder-carousel.liquid`: Carousel section for patches and hats.
- `hat-builder-footer.liquid`: Footer section.

### Scripts
- `hat-builder-main.js`: Main JavaScript file that handles all interactivity for the Hat Builder component.

## Interaction

### HTML & CSS
- Liquid files use classes from the respective CSS files to style their elements.

### HTML & JS
- `hat-builder-main.js` manipulates the DOM elements defined in the Liquid files to add interactivity.

### CSS & JS
- `hat-builder-main.js` toggles CSS classes to change element states.

## Real-Time Workflow with New Code

1. **Page Load**: The main Liquid file loads and is styled by the CSS files. The JavaScript initializes variables and sets up event listeners.
2. **User Interaction**: User clicks on a toggle button (either patches or hats).
3. **JS Execution**: Functions within `hat-builder-main.js` are triggered to display the corresponding drop-down.
4. **User Selects Collection**: User clicks on a collection card within the drop-down.
5. **JS Execution**: Functions are triggered to update the carousel and header, and close the drop-down.
6. **UI Update**: The carousel and header are updated based on the selected collection.
7. **User Continues**: User can continue to interact with the Hat Builder, and steps 2-6 are repeated as needed.

## Contributing
Feel free to fork this repository and submit pull requests for any improvements or features you'd like to add.
