export default function menuPage(){
    const content =document.querySelector(".content")
    const menuPage = document.createElement("div")
    menuPage.classList.add("menu-page")
    const header = document.createElement("h1")
    header.textContent = "This is a delisous all in house, fresh menu!!";
    menuPage.append(header)
    content.append(menuPage)
}