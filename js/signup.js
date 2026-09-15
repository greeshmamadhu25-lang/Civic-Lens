import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { auth } from "./firebase.js";

const signupForm = document.querySelector(".auth-form");

signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);

        alert("Account created successfully!");

        window.location.href = "login.html";

    } catch (error) {
        alert(error.message);
    }
});
