/* =========================
   Day 1: Setup JavaScript
   ========================= */
console.log("JavaScript connected successfully");

/* =========================
   Day 2: DOM Manipulation
   ========================= */
const heading = document.querySelector("header h1");
heading.style.cursor = "pointer";

/* Change heading text on click */
heading.addEventListener("click", () => {
    heading.textContent = "Welcome to My Portfolio";
});

/* =========================
   Day 3: Event Handling
   ========================= */
const skillItems = document.querySelectorAll("#skills li");

skillItems.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.style.backgroundColor = "#eae8ff";
    });

    skill.addEventListener("mouseout", () => {
        skill.style.backgroundColor = "#ffffff";
    });
});

/* =========================
   Day 4: Form Validation
   ========================= */
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value.trim() === "") {
        alert("Name is required");
        return;
    }

    if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (messageInput.value.trim().length < 10) {
        alert("Message must be at least 10 characters");
        return;
    }

    alert("Form submitted successfully!");
    form.reset();
});

/* =========================
   Day 5: Interactive Features
   Dark Mode Toggle
   ========================= */
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
darkModeBtn.style.marginTop = "1rem";
document.querySelector("header").appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
});

/* =========================
   Day 6: Local Storage
   ========================= */
window.addEventListener("load", () => {
    const darkModeStatus = localStorage.getItem("darkMode");

    if (darkModeStatus === "true") {
        document.body.classList.add("dark-mode");
    }
});

/* =========================
   Day 7: Testing & Debugging
   ========================= */
console.log("All features loaded without errors");
