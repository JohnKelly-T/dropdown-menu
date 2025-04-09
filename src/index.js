import "./styles/global.css";
import { dropdown } from "./modules/dropdown";

let dropdownHover = document.querySelector("#hover");
let dropdownClick= document.querySelector("#click");
let dropdownLeft= document.querySelector("#left");
let dropdownRight= document.querySelector("#right");
let dropdownCenter= document.querySelector("#center");

dropdown(dropdownHover, "hover");
dropdown(dropdownClick, "click");
dropdown(dropdownLeft, "hover"); // left aligned by default
dropdown(dropdownRight, "hover", "right");
dropdown(dropdownCenter, "hover", "center");

