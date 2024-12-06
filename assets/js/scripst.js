const toggleTheme = document.getElementById("toggle_theme")

const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")
    
    toggleTheme.classList.toggle("bi-arrow-bar-down")
    toggleTheme.classList.toggle("bi-arrow-bar-up")
}
toggleTheme.addEventListener("click", changeTheme)

const accordionHeader = document.querySelectorAll(".accordion_header");

accordionHeader.forEach(header =>{
    header.addEventListener("click",() =>{
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active")
    })
})