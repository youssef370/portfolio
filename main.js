const steps = document.querySelectorAll(".process__step");

steps.forEach((step) => {
    step.addEventListener("click", () => {
        step.classList.toggle("process__step--opacity");
    });
});
