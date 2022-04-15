const menuNav = document.getElementById("menu")
const menuHamburguesa = document.getElementById("menu-hamburguesa")

const cerrarNavBar = () => menuNav.classList.remove("menu__open")

menuHamburguesa.addEventListener("click", () => menuNav.classList.toggle("menu__open"))

menuNav.addEventListener("click", cerrarNavBar)