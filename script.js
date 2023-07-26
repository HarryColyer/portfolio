const navToggler = document.querySelector("#toggle") 
const navLinks = document.querySelector("#toggle-links") 
const container = document.querySelector(".container")

navToggler.addEventListener("click", () => {
    navLinks.classList.toggle("d-none")
    container.classList.toggle("rotate")
})

document.addEventListener("click", (e) => {
    const target = e.target
    if (target === navToggler || target === navLinks) return;
    navLinks.className = "nav-links d-none"
    container.className = ""
})