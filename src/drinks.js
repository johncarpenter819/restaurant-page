export default function drinkPage(){
    const content =document.querySelector(".content")
    const drinkPage = document.createElement("div")
    drinkPage.classList.add("drinks-page")
    const header = document.createElement("h1")
    header.textContent = "Our well crafted full bar menu";
    drinkPage.append(header)
    content.append(drinkPage)
}