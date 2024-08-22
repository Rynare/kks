const nav = document.querySelector("nav.navbar")

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", setNavScrolled)
    setNavScrolled()
    AOS.init();
    const navCollapse = nav.querySelector(".navbar-collapse");
    navCollapse.addEventListener("show.bs.collapse", () => {
        nav.classList.add("nav-showed");
    });
    navCollapse.addEventListener("hide.bs.collapse", () => {
        nav.classList.remove("nav-showed");
    });
})

function setNavScrolled() {
    if (window.scrollY >= nav.clientHeight) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
}