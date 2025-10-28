document.addEventListener("DOMContentLoaded", () => {
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const nav = document.querySelector(".nav");

  mobileNavToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    const isExpanded = nav.classList.contains("active");
    mobileNavToggle.setAttribute("aria-expanded", isExpanded);
    mobileNavToggle.querySelector("i").classList.toggle("fa-bars", !isExpanded);
    mobileNavToggle.querySelector("i").classList.toggle("fa-times", isExpanded);
  });
});

function sendContactForm(event) {
  event.preventDefault();
  // In a real project, you would add your form submission logic here.
  // For this example, we'll just show a status message.
  const formStatus = document.getElementById("formStatus");
  formStatus.textContent = "Message sent! Thank you for getting in touch.";
  document.getElementById("contactForm").reset();
}
