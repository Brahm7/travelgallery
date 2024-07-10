// script.js
document.addEventListener("DOMContentLoaded", () => {
    const txState = document.getElementById("tx");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".close-btn");

    txState.addEventListener("click", () => {
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 10);
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
        }
    });
});
