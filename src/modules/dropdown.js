export const dropdown = function (dropdownTrigger, triggerType="hover", align="left") {
    
    if (triggerType == "hover") {
        dropdownTrigger.classList.add("dropdown-hover");
    }  else if (triggerType == "click") {
        let dropdownMenu = dropdownTrigger.querySelector(".dropdown-menu");

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
}