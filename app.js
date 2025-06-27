document.addEventListener("DOMContentLoaded", () => {
    const primaryNav = document.querySelector(".primay-nav")
    const mobileMenuOpenBtn = document.querySelector(".ham-mobile-menu")
    const mobileMenuCloseBtn = document.querySelector(".close-mobile-menu")

    mobileMenuOpenBtn.addEventListener("click", () => {
        const isMenuExpanded = primaryNav.getAttribute("aria-expanded")
        isMenuExpanded == "true" ? primaryNav.setAttribute("aria-expanded", "false") : primaryNav.setAttribute("aria-expanded", "true")
    })

    mobileMenuCloseBtn.addEventListener("click", () => {
        primaryNav.setAttribute("aria-expanded", "false")
    })
})