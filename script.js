// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            if (navbar.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });


    // Close menu when a link is clicked

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });
}



// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "/an Economist",
    "Data Analyst",
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "JavaScript Developer",
    "Researcher"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typingEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }


    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}


typingEffect();



// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");


if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light");

        const icon = themeBtn.querySelector("i");


        if (document.body.classList.contains("light")) {

            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

        } else {

            if (icon) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );
        }

    });


    // Remember saved theme

    const savedTheme =
        localStorage.getItem("portfolioTheme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

        const icon = themeBtn.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }

    }
}



// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");


if (topBtn) {

    // Hide button initially

    topBtn.style.display = "none";


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



// ===============================
// CONTACT FORM
// ===============================

// Use ONE ID for your form:
// <form id="contactForm">

const contactForm =
    document.getElementById("contact-form");

const submitBtn =
    document.getElementById("submit-btn");


if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        // Disable button while sending

        if (submitBtn) {

            submitBtn.disabled = true;

            submitBtn.textContent = "Sending...";

        }


        const formData =
            new FormData(contactForm);


        try {

            // If your form has an action URL,
            // send the form to that URL.

            const formAction =
                contactForm.action;

            const formMethod =
                contactForm.method || "POST";


            const response =
                await fetch(formAction, {

                    method: formMethod,

                    body: formData,

                    headers: {
                        "Accept": "application/json"
                    }

                });


            if (response.ok) {

                alert(
                    "Success! Your message has been sent successfully."
                );

                contactForm.reset();

            } else {

                alert(
                    "Oops! There was a problem submitting your form."
                );

            }


        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            alert(
                "Oops! Network error. Please try again later."
            );

        } finally {

            // Enable button again

            if (submitBtn) {

                submitBtn.disabled = false;

                submitBtn.textContent =
                    "Send Message";

            }

        }

    });

}



// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");


if (sections.length > 0 && navLinks.length > 0) {

    window.addEventListener("scroll", function () {

        let current = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;


            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

}

