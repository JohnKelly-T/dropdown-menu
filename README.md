# @johnkelly-t/dropdown-menu
A lightweight, customizable dropdown component built with plain HTML, CSS, and JavaScript. This package provides the essential behavior and basic styling, allowing you to easily extend and personalize the design with your own CSS.

## 📦 Installation
To install via npm:
```bash
    npm install @johnkelly-t/dropdown-menu
```

## 🛠️ Usage
To use dropdown-menu, recreate the required HTML structure and apply the provided class names to ensure functionality.

**Basic HTML Structure**

```bash
<div class="dropdown-trigger" id="hover">
  Dropdown
  <div class="dropdown-menu">
    <button class="dropdown-item">Item 1</button>
    <div class="dropdown-item">Item 2</div>
    <div class="dropdown-item">Item 3</div>
  </div>
</div>
```

**Javascript**
Import the setupDropdown function to initialize the dropdown in your project:
```bash
    import { setupDropdown } from "@johnkelly-t/dropdown-menu"
```

Pass the dropdown element and the trigger type ("hover" or "click") as arguments to activate the dropdown. Use "hover" for hover-triggered dropdowns, or "click" for click-triggered dropdowns.
```bash
    let dropdownElement = document.querySelector(".dropdown");
    
    setupDropdown(dropdownElement, "hover");
```

## 🎨 Customizations

### Dropdown Menu alignment
By default, the dropdown menu aligns to the left side of the trigger. To change this behavior, you can pass a third argument to setupDropdown() with either "right" or "center" to adjust the alignment.

*example*



```bash
    setupDropdown(dropdownElement, "hover", "center")
```

*Result:*
The dropdown menu will now be centered relative to the dropdown trigger.

### Styling
You can easily customize the appearance by overriding the default CSS classes:

- `.dropdown-trigger`
- `.dropdown-menu`
- `.dropdown-item`
- `.dropdown-item:hover`