function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
document.addEventListener("DOMContentLoaded", () => {
    const heroButton = document.querySelector(".hero button");
    heroButton.addEventListener("click", () => {
        alert("Navigating to Services Section!");
        document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    });

    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login functionality is for demo purposes only.");
    });
});
