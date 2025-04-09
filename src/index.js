import "./styles/global.css";
import { setupDropdown } from "./modules/dropdown";

let dropdownHover = document.querySelector("#hover");
let dropdownClick= document.querySelector("#click");
let dropdownLeft= document.querySelector("#left");
let dropdownRight= document.querySelector("#right");
let dropdownCenter= document.querySelector("#center");

setupDropdown(dropdownHover, "hover");
setupDropdown(dropdownClick, "click");
setupDropdown(dropdownLeft, "hover"); // left aligned by default
setupDropdown(dropdownRight, "hover", "right");
setupDropdown(dropdownCenter, "hover", "center");

