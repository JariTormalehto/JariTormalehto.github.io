// script.js

const API_URL = "https://jaritormalehto.github.io/api/auth/signin"; // Replace with your actual server URL

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the entered credentials are the test credentials
  if (username === "testuser" && password === "testpassword") {
    try {
      // Simulate a successful authentication response
      const data = { token: "mock-token-for-testuser" };

      // Store the mock JWT token securely (for example, in localStorage)
      localStorage.setItem("token", data.token);

      // Redirect to the user's profile page (profile.html)
      window.location.href = "/profile.html";
    } catch (error) {
      console.error("Authentication failed:", error.message);
    }
  } else {
    console.error("Invalid credentials");
  }
}
