document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    // Handle form submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent default form submission and page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters long.");
            return;
        }

        // If everything is valid
        alert("Your message has been sent successfully!");
        contactForm.reset();  // Reset the form
    });
});
