import home from "./home.css"

export default function homePage(){
    const content =document.querySelector(".content")
    const homePage = document.createElement("div")
    homePage.classList.add("home-page")
    const header = document.createElement("h1")
    header.textContent = "Welcome to our restaurant, we look forward to serving you!!";
    homePage.append(header)
    content.append(homePage)
}