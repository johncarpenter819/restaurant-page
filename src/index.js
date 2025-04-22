import homePage from "./home.js";
import aboutPage from "./about.js";
import menuPage from "./menu.js";
import wineListPage from "./wine-list.js";
import drinkPage from "./drinks.js";
import weddingsPage from "./weddings.js";

function reset() {
    document.querySelector(".content").innerHTML = "";
}

document.querySelector("#home").addEventListener("click", () => {
    reset();
    homePage();
});
homePage();

document.querySelector("#about").addEventListener("click", () => {
    reset();
    aboutPage();
});
aboutPage();

document.querySelector("#menu").addEventListener("click", () => {
    reset();
    menuPage();
});
menuPage();

document.querySelector("#wine-list").addEventListener("click", () => {
    reset();
    wineListPage();
});
wineListPage();

document.querySelector("#drinks").addEventListener("click", () => {
    reset();
    drinkPage();
});
drinkPage();

document.querySelector("#weddings").addEventListener("click", () => {
    reset();
    weddingsPage();
});
weddingsPage();
