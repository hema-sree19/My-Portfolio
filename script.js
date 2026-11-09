
// Welcome message
console.log("Welcome to Hema Sree's Portfolio!");

// Explore button message
const exploreButton = document.querySelector(".btn");

exploreButton.addEventListener("click", function () {
    console.log("Welcome! Explore my portfolio.");
});

// Navigation click message
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("You selected: " + link.textContent);
    });
});
