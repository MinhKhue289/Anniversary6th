// Smooth scroll to timeline section
document.getElementById("scrollBtn").addEventListener("click", () => {
  document.querySelector(".timeline-section").scrollIntoView({
    behavior: "smooth",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let plane = document.getElementById("plane");
  setTimeout(() => {
    plane.style.transform = "translateX(100vw)";
  }, 500);
});
