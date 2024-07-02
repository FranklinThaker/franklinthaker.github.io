document.addEventListener("DOMContentLoaded", () => {
  // Animate title and subtitle
  anime
    .timeline({ loop: false })
    .add({
      targets: ".animate-title",
      opacity: [0, 1],
      translateY: [50, 0],
      easing: "easeOutExpo",
      duration: 1200,
      delay: 300,
    })
    .add({
      targets: ".animate-subtitle",
      opacity: [0, 1],
      translateY: [50, 0],
      easing: "easeOutExpo",
      duration: 1200,
      delay: 300,
    });

  // Animate progress bars
  document.querySelectorAll(".progress").forEach((progress) => {
    const percent = progress.getAttribute("data-percent");
    anime({
      targets: progress,
      width: percent + "%",
      easing: "easeInOutQuart",
      duration: 1000,
      delay: 500,
    });
  });

  // Project card expansion
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const details = card.querySelector(".project-details");
      if (details.style.maxHeight) {
        details.style.maxHeight = null;
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
      }
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Database icon tooltips
  document.querySelectorAll(".database-icons i").forEach((icon) => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = icon.getAttribute("data-tooltip");
    icon.appendChild(tooltip);
  });
});
