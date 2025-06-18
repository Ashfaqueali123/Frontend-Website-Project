document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            // Simulated login check
            // In a real application, you would send this data to the server for validation            
            if (username === "admin" && password === "password") {
                alert("Login successful!");
                window.location.href = "index.html";
            } else if (username === "" || password === "") {
                alert("Please fill in all fields.");
                event.target.reset();
            }
        });

    }
});
 const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;

            if (newUsername && newPassword) {
                alert("Signup successful! You can now log in.");
                window.location.href = "login.html";
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
