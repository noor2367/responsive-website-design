// const hamBurger = document.querySelector(".hamburger");
// const menubar = document.querySelector(".menubar");
// const closeBtn = document.querySelector(".close-btn");

// hamBurger.addEventListener("click", function(){
//     menubar.classList.toggle("active");
// })


// document.addEventListener("DOMContentLoaded", function () {
//     const menu = document.querySelector(".menubar");
//     const hamburger = document.querySelector(".hamburger");

//     hamburger.addEventListener("click", function () {
//         menu.classList.toggle("active");
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".menubar");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close-btn");

    // Open menu when hamburger is clicked
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    // Close menu when close button is clicked
    closeBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});





