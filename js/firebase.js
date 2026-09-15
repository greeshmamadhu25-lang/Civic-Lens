import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWrphU0Ixnwwf1EvzvmCi_RbMYm_tTnj8",
  authDomain: "civiclens-f6fa7.firebaseapp.com",
  projectId: "civiclens-f6fa7",
  storageBucket: "civiclens-f6fa7.firebasestorage.app",
  messagingSenderId: "11523268542",
  appId: "1:11523268542:web:378b17458c162f9bd0a3ef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
