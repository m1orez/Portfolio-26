document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('MIOREZ_PORTFOLIO', 'template_sl1yk5i', this)
    .then(() => {
      msg.textContent = "Message sent successfully!";
      msg.style.color = "#ff2b87";
      form.reset();
    })
    .catch((error) => {
      msg.textContent = "Oops! Something went wrong.";
      msg.style.color = "red";
      console.error('EmailJS Error:', error);
    });
});
