// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// CURRENT YEAR IN FOOTER

const footer = document.querySelector("footer p:last-child");

if (footer) {
    footer.textContent =
        "© " + new Date().getFullYear() +
        " CHASE Digital Solutions. All rights reserved.";
}


// WELCOME MESSAGE

console.log("Welcome to CHASE Digital Solutions!");
console.log("Turning Business Ideas into Digital Reality.");
