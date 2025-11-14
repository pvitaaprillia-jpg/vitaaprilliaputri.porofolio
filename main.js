document.addEventListener("DOMContentLoaded", () => {

  // Animasi Section
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // animasi skill bar
        if (entry.target.id === "skills") {
          const bars = entry.target.querySelectorAll(".skill-progress");
          bars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
          });
        }
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));

  // Menu aktif + scroll smooth
  const menuLinks = document.querySelectorAll(".sidebar ul li a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      menuLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      const target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: "smooth"
      });
    });
  });

});
