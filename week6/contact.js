import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBG2YhjafhwNK9WD7USesex85W2gIXPOog",
    authDomain: "mobile-programming-ef21b.firebaseapp.com",
    projectId: "mobile-programming-ef21b",
    storageBucket: "mobile-programming-ef21b.firebasestorage.app",
    messagingSenderId: "337041309708",
    appId: "1:337041309708:web:01f16444155ed205dfee29",
    measurementId: "G-KVL8WMR0W7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    try {
        statusMsg.textContent = "Sending...";
        
        await push(ref(database, "contacts"), {
            name,
            email,
            phone,
            message,
            timestamp: new Date().toISOString()
        });

        statusMsg.textContent = "✓ Message sent successfully!";
        statusMsg.classList.add("success");
        form.reset();

        setTimeout(() => {
            statusMsg.textContent = "";
            statusMsg.classList.remove("success");
        }, 3000);
    } catch (error) {
        statusMsg.textContent = "✗ Error sending message. Please try again.";
        statusMsg.classList.add("error");
        console.error("Error:", error);
    }
});
