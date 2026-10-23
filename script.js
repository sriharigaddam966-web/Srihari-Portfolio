var typed = new Typed(".multiple-text", {
    strings: [
        "Data Analytics Enthusiast",
        "Problem Solver",
        "Python Learner"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});
//================ DARK MODE ================

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-mode");

    let icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}
//================ MOBILE MENU =================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");

        // Change hamburger icon to close icon
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);

        menuIcon.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after clicking a navigation link
    navbar.querySelectorAll("ul a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");

            menuIcon.classList.add("fa-bars");
            menuIcon.classList.remove("fa-xmark");

            menuIcon.setAttribute("aria-expanded", "false");
        });
    });
}