```javascript
// =========================================
// MENU MOBILE
// =========================================

const menuButton = document.getElementById("menuButton");

const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("menu-open");

});


// =========================================
// ANIMACIÓN AL HACER SCROLL
// =========================================

const elements = document.querySelectorAll(
    ".service-card, .project, .process-item, .about-text"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


// =========================================
// CERRAR MENU AL HACER CLICK
// =========================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

    });

});
```