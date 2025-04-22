export default function wineListPage(){
    const content =document.querySelector(".content")
    const wineListPage = document.createElement("div")
    wineListPage.classList.add("wine-list-page")
    const header = document.createElement("h1")
    header.textContent = "Our wonderful collection of world class wines!";
    wineListPage.append(header)
    content.append(wineListPage)
}