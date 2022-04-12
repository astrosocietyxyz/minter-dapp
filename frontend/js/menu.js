const ToggleButton = document.getElementsByClassName("togglemenu-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

ToggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})