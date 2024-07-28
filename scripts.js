document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        if (email && message) {
            alert("Thank you for your message!");
            // Here you could add functionality to send the data to a server
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});

