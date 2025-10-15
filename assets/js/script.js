// Contact form submission
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    });
    const result = await res.json();
    if (result.received) {
      status.textContent = "Message sent!";
      form.reset();
    } else {
      status.textContent = "Something went wrong.";
    }
  });
}
