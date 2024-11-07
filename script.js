// Select elements for carousel and overlay
const carousel = document.getElementById("carouselExampleIndicators");
const closeCarousel = document.getElementById("closeCarousel");
const overlay = document.getElementById("carouselOverlay");
const targetDiv = document.getElementById("us_map");
const mapLegend = document.getElementById("map-legend");

// Button to scroll down to map-section
document.getElementById("explore").addEventListener("click", () => {
  document.getElementById("map-section").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const buffer = 250;
  return (
    rect.top >= -buffer &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + buffer
  );
}

// Function that reveals and hides the target div
function revealDiv() {
  if (isInViewport(targetDiv)) {
    targetDiv.style.opacity = "1";
    targetDiv.style.pointerEvents = "all";
    mapLegend.style.opacity = "1";
  } else {
    targetDiv.style.opacity = "0";
    targetDiv.style.pointerEvents = "none";
    mapLegend.style.opacity = "0";
  }
}

// Scroll event listener for revealing the div
window.addEventListener("scroll", revealDiv);

// Function to open the carousel
function openCarousel(images) {
  updateCarousel(images); // Update the carousel with the new images
  document.getElementById("carouselExampleIndicators").scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  carousel.style.transition = "opacity 0.5s ease"; // Smooth transition
  carousel.style.opacity = "1";
  carousel.style.pointerEvents = "all";
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "all";
  document.body.style.overflow = "hidden"; // Disable scrolling
}

// Function to close the carousel
function closeCarouselFunction() {
  carousel.style.transition = "opacity 0.5s ease"; // Smooth transition
  carousel.style.opacity = "0";
  carousel.style.pointerEvents = "none";
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none"; // Disable overlay interaction
  document.body.style.overflow = "auto"; // Enable scrolling
}

// Event listener for carousel links
document.querySelectorAll('a[id^="carousel"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the anchor from navigating
    const images = this.getAttribute("data-images").split(","); // Get images from data attribute
    openCarousel(images); // Open the carousel
  });
});

// Event listener for closing the carousel
closeCarousel.addEventListener("click", closeCarouselFunction);
overlay.addEventListener("click", closeCarouselFunction);

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
