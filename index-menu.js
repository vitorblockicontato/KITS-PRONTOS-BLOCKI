const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}

document.querySelectorAll(".has-submenu > a").forEach((link) => {
    link.addEventListener("click", (event) => {
        if (window.innerWidth <= 1050) {
            event.preventDefault();
            link.parentElement.classList.toggle("open");
        }
    });
});

document.addEventListener("click", (event) => {
    const clickedInsideMenu = event.target.closest(".index-nav");
    const clickedToggle = event.target.closest(".menu-toggle");

    if (!clickedInsideMenu && !clickedToggle && mainNav) {
        mainNav.classList.remove("open");
        document.querySelectorAll(".nav-item.open").forEach((item) => item.classList.remove("open"));
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    }
});
