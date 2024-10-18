const carousel = document.getElementById("carouselExampleIndicators");
const closeCarousel = document.getElementById("closeCarousel");

document.querySelectorAll('a[id^="carousel"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the anchor from navigating

    const images = this.getAttribute("data-images").split(","); // Get images from data attribute
    updateCarousel(images); // Update the carousel with these images

    // Show the carousel with a smooth transition
    carousel.style.transition = "opacity 0.5s ease"; // Optional: smooth transition for showing
    carousel.style.opacity = "1";
    carousel.style.pointerEvents = "all";
  });
});

closeCarousel.addEventListener("click", function () {
  // Hide the carousel with a smooth transition
  carousel.style.transition = "opacity 0.5s ease"; // Optional: smooth transition for hiding
  carousel.style.opacity = "0";
  carousel.style.pointerEvents = "none";
});

// Function to update the carousel with new images
function updateCarousel(images) {
  const carouselInner = carousel.querySelector(".carousel-inner");
  const carouselIndicators = carousel.querySelector(".carousel-indicators");

  // Clear current items and indicators
  carouselInner.innerHTML = "";
  carouselIndicators.innerHTML = "";

  // Create new items and indicators
  images.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${index === 0 ? "active" : ""}`;
    item.innerHTML = `<img class="d-block w-100" src="${src}" alt="Slide ${
      index + 1
    }">`;
    carouselInner.appendChild(item);

    const indicator = document.createElement("li");
    indicator.setAttribute("data-target", "#carouselExampleIndicators");
    indicator.setAttribute("data-slide-to", index);
    if (index === 0) indicator.classList.add("active");
    carouselIndicators.appendChild(indicator);
  });
}
