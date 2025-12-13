// Typewriter Effect Data
const roles = [
    "Artificial Intelligence",
    "Game Development",
    "Machine Learning",
    "Software Engineering"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    if (count === roles.length) {
        count = 0;
    }
    currentText = roles[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.querySelector(".typewriter").textContent = letter;

    let typeSpeed = 100;
    if (isDeleting) typeSpeed = 50;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500; // Pause before next word
    }

    setTimeout(type, typeSpeed);
})();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});