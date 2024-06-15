function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}

function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("application-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);
        const fullname = formData.get("fullname");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        // Simple validation
        if (!fullname || !email || !phone || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // You can perform further validation here, e.g., email validation, phone number format validation, etc.
        
        // If all fields are valid, you can submit the form data to a server or display a success message
        alert("Application submitted successfully!");
        form.reset(); // Reset the form after submission
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  });

  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !subject || !message) {
      return false;
    }
    if (!email.includes('@')) {
      return false;
    }
    return true;
  }