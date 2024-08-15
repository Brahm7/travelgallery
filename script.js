window.addEventListener('load', function() {
    if (window.location.hash) {
        window.location.hash = '';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Function to open a modal
    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    // Function to close a modal
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Add event listeners to open modals
    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    openModalButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal-target");
            openModal(modalId);
        });
    });

    // Add event listener to close modals when clicking outside
    window.addEventListener("click", event => {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
            if (event.target == modal) {
                closeModal(modal.id);
            }
        });
    });

    // Carousel functionality for each modal
    document.querySelectorAll(".modal").forEach(modal => {
        let slideIndex = 0;
        const slides = modal.getElementsByClassName("carousel-item");

        function showSlides(n) {
            if (n >= slides.length) {slideIndex = 0}
            if (n < 0) {slideIndex = slides.length - 1}
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
            }
        }

        // Initial display of slides
        showSlides(slideIndex);

        // Next/previous controls
        modal.querySelector('.prev').addEventListener('click', function() {
            showSlides(slideIndex += -1);
        });

        modal.querySelector('.next').addEventListener('click', function() {
            showSlides(slideIndex += 1);
        });
    });
});

