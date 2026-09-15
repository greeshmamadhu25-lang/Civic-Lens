alert("report.js is connected!");
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db, auth } from "./firebase.js";

const reportForm = document.querySelector(".report-form");

reportForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const user = auth.currentUser;

    if (!user) {
        alert("Please log in to submit a report.");
        window.location.href = "login.html";
        return;
    }

    const issueType = document.getElementById("issue-type").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    try {
        await addDoc(collection(db, "reports"), {
            userId: user.uid,
            issueType: issueType,
            location: location,
            description: description,
            status: "Reported",
            createdAt: serverTimestamp()
        });

        alert("Report submitted successfully!");

        reportForm.reset();

    } catch (error) {
        alert(error.message);
    }
});
