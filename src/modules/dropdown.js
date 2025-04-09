import "../styles/dropdown.css";

export const setupDropdown = function (dropdownTrigger, triggerType, align="left") {
    
    let dropdownMenu = dropdownTrigger.querySelector(".dropdown-menu");

    if (triggerType == "hover") {
        dropdownTrigger.classList.add("dropdown-hover");
    }  else if (triggerType == "click") {
        dropdownTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdownTrigger.classList.toggle("dropdown-click");
        })

        document.addEventListener("click", (e) => {
            if (e.target !== dropdownMenu) {
                    dropdownTrigger.classList.remove("dropdown-click");
            }
        })
    }   

    switch (align) {
        case "left":
            dropdownMenu.classList.add("dropdown-menu-left-align");
            break;
        case "right":
            dropdownMenu.classList.add("dropdown-menu-right-align");
            break;
        case "center":
            dropdownMenu.classList.add("dropdown-menu-center-align");
            break;
    }
}