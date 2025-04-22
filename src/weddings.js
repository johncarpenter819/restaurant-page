export default function weddingsPage(){
    const content =document.querySelector(".content")
    const weddingsPage = document.createElement("div")
    weddingsPage.classList.add("weddingsPage-page")
    const header = document.createElement("h1")
    header.textContent = "Plan your wedding with us! We look forward to serving your big day!!";
    weddingsPage.append(header)
    content.append(weddingsPage)
}