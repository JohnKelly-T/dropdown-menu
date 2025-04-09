# @johnkelly-t/dropdown-menu
A lightweight, customizable dropdown component built with plain HTML, CSS, and JavaScript. This package provides the essential behavior and basic styling, allowing you to easily extend and personalize the design with your own CSS.

## 📦 Installation
To install via npm:
```bash
    npm install @johnkelly-t/dropdown-menu
```

## 🛠️ Usage
To use dropdown-menu, recreate the required HTML structure and apply the provided class names to ensure proper functionality. While you can replace the default div elements with other HTML elements, keep in mind that doing so may affect the styling, depending on the element you choose.

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
By default, the dropdown menu aligns to the left side of the trigger when the content exceeds the dropdown-trigger width. To change this behavior, you can pass a third argument to setupDropdown() with either "right" or "center" to adjust the alignment.

*example*

![Screenshot_23](https://github.com/user-attachments/assets/eaf801a0-8834-4710-a2ec-8ad2defa2bbc)

```bash
    setupDropdown(dropdownElement, "hover", "center")
```

*Result:*
The dropdown menu will now be centered relative to the dropdown trigger.
![Screenshot_20](https://github.com/user-attachments/assets/fbff620e-af2b-4b37-90ee-4a0888ec5ea8)


### Styling
You can easily customize the appearance by overriding the default CSS classes:

- `.dropdown-trigger`
- `.dropdown-menu`
- `.dropdown-item`
- `.dropdown-item:hover`

**Example**

![image](https://github.com/user-attachments/assets/da772111-4e11-441a-b6c3-9d48a99d9bf7)


![image](https://github.com/user-attachments/assets/ec3337f1-5785-49c8-9fc9-d2eabfa989d2)


