// MOBILE MENU TOGGLE
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.innerHTML = isOpen ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

// AUTO-CLOSE WHEN CLICKING LINK
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) toggleMenu();
    });
});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = "⚠ Please fill out all fields.";
    } else {
        messageDiv.style.color = 'green';
        messageDiv.textContent = "✔ Message sent successfully. Thank you!";
        contactForm.reset();
    }
});