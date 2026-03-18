document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault(); // stop form submission

    let isValid = true;

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear old errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Form submitted successfully!");
    }

});