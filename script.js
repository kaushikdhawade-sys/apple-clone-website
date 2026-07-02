// ===============================
// Sticky Navbar Effect
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.85)";
        navbar.style.boxShadow = "none";
    }
});

// ===============================
// Product Card Hover Effect
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

console.log("Apple Clone Loaded Successfully 🚀");