import "./style.css";
import createHome from "./home.js";
import createAbout from "./about.js";
import createMenu from "./menu.js";

function clearContent(){
    const contentNode = document.getElementById("content");
    while (contentNode.lastElementChild) {
        contentNode.removeChild(contentNode.lastElementChild);
    }
}

document.getElementById("home").addEventListener("click", loadHome);

function loadHome(){
    clearContent();
    createHome();
}

document.getElementById("about").addEventListener("click", loadAbout);

function loadAbout(){
    clearContent();
    createAbout();
}

document.getElementById("menu").addEventListener("click", loadMenu);

function loadMenu(){
    clearContent();
    createMenu();
}

loadHome();