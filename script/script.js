const nav = document.querySelector("nav.navbar")

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", setNavScrolled)
    setNavScrolled()
})

function setNavScrolled() {
    if (window.scrollY >= nav.clientHeight) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
}