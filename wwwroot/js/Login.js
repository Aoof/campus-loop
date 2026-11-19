import {
    auth,
    db,
    signInWithEmailAndPassword,
    ref,
    get
} from "./firebase.js";

const form = document.getElementById("login-form");
const error = document.getElementById("error");

function showError(message) {
    error.textContent = message;
    error.classList.remove("d-none");
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = form.elements["Email"].value.trim();
    const password = form.elements["Password"].value;

    if (!email || !password) {
        showError("Please enter your email and password.");
        return;
    }

    try {
        const credential = await signInWithEmailAndPassword(auth, email, password);
        const user = credential.user;

        const snapshot = await get(ref(db, `users/${user.uid}`));

        if (!snapshot.exists()) {
            showError("Your user profile was not found.");
            return;
        }

        const profile = snapshot.val();

        if (profile.role === "Buyer") {
            window.location.href = "/Buyer/Index";
        } else if (profile.role === "Seller") {
            window.location.href = "/Seller/Index";
        } else {
            showError("Your account role is invalid.");
        }
    } catch (firebaseError) {
        showError(firebaseError.message);
    }
});