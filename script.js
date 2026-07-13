var typed = new Typed(".multiple-text", {
    strings: [
        "Data Analytics Enthusiast",
        "Java Developer",
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

menuIcon.onclick = () =>{

    navbar.classList.toggle("active");

}