import {
    collection,
    query,
    where,
    getDocs,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    auth,
    db
} from "./firebase.js";

const reportsList = document.querySelector(".reports-list");

onAuthStateChanged(auth, async (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    try {
        const reportsQuery = query(
            collection(db, "reports"),
            where("userId", "==", user.uid),
            orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(reportsQuery);

        if (snapshot.empty) {
            reportsList.innerHTML = `
                <div class="empty-state">
                    <h2>No reports yet</h2>
                    <p>Your submitted waste reports will appear here.</p>
                    <a href="report.html" class="primary-btn">Report an Issue</a>
                </div>
            `;
            return;
        }

        reportsList.innerHTML = "";

        snapshot.forEach((doc) => {
            const report = doc.data();

            const reportCard = document.createElement("div");
            reportCard.className = "empty-state";

            reportCard.innerHTML = `
                <h2>${report.issueType}</h2>
                <p><strong>Location:</strong> ${report.location}</p>
                <p><strong>Description:</strong> ${report.description}</p>
                <p><strong>Status:</strong> ${report.status}</p>
            `;

            reportsList.appendChild(reportCard);
        });

    } catch (error) {
        console.error(error);
        reportsList.innerHTML = `
            <div class="empty-state">
                <h2>Unable to load reports</h2>
                <p>Please try again later.</p>
            </div>
        `;
    }
});
