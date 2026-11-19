import {
    auth,
    db,
    createUserWithEmailAndPassword,
    ref,
    set
} from "./firebase.js";

const form = document.getElementById("register-form");
const error = document.getElementById("error");
const success = document.getElementById("success");

function showError(message) {
    error.textContent = message;
    error.classList.remove("d-none");
    success.classList.add("d-none");
}

function showSuccess(message) {
    success.textContent = message;
    success.classList.remove("d-none");
    error.classList.add("d-none");
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullName = form.elements["FullName"].value.trim();
    const email = form.elements["Email"].value.trim();
    const password = form.elements["Password"].value;
    const confirmPassword = form.elements["ConfirmPassword"].value;
    const role = form.elements["Role"].value;

    if (!fullName || !email || !password || !confirmPassword || !role) {
        showError("Please complete all registration fields.");
        return;
    }

    if (password.length < 6) {
        showError("Password must contain at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
    }

    if (role !== "Buyer" && role !== "Seller") {
        showError("Please select a valid account type.");
        return;
    }

    try {
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        const user = credential.user;

        await set(ref(db, `users/${user.uid}`), {
            id: user.uid,
            fullName: fullName,
            email: email,
            role: role,
            createdAt: new Date().toISOString()
        });

        showSuccess("Account created successfully.");

        window.setTimeout(function () {
            window.location.href = "/User/Login";
        }, 700);
    } catch (firebaseError) {
        showError(firebaseError.message);
    }
});