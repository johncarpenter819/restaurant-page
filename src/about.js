export default function aboutPage(){
    const content =document.querySelector(".content")
    const aboutPage = document.createElement("div")
    aboutPage.classList.add("about-page")
    const header = document.createElement("h1")
    header.textContent = "This is the about section!";
    aboutPage.append(header)
    content.append(aboutPage)
}