// ========== FAQ TOGGLE SYSTEM ==========
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentElement.querySelector(".faq-answer");

    // Close all FAQs first
    document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));
    document.querySelectorAll(".faq-question span").forEach((s) => (s.textContent = "+"));

    // Toggle clicked FAQ
    if (answer.style.display === "block") {
      answer.style.display = "none";
      button.querySelector("span").textContent = "+";
    } else {
      answer.style.display = "block";
      button.querySelector("span").textContent = "–";
    }
  });
});

// ========== CONTACT FORM (Frontend Only) ==========
const visitForm = document.getElementById("visitForm");

if (visitForm) {
  visitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Our team will contact you between 10 AM – 6 PM.");

    visitForm.reset();
  });
}

// ========== FOOTER YEAR AUTO ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
