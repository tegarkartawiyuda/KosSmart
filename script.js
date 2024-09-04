document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Ubah nilai ini sesuai dengan kebutuhan
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Toggle untuk mobile menu
  const toggleButton = document.querySelector(".navbar__toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  toggleButton.addEventListener("click", () => {
    console.log("Toggle button clicked");
    mobileMenu.classList.toggle("hidden");
  });

  // Event listener untuk kartu properti
  const propertyCards = document.querySelectorAll(".property-card");

  propertyCards.forEach((card) => {
    // Menambahkan event listener pada seluruh kartu
    card.addEventListener("click", (e) => {
      // Jika klik bukan pada tombol bookmark
      if (!e.target.closest(".bookmark-btn")) {
        window.location.href = card.getAttribute("data-link");
      }
    });
  });

  // Event listener untuk tombol bookmark
  const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

  bookmarkButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Mencegah propagasi klik ke elemen lain
      e.stopPropagation();

      // Toggle status bookmark
      const isPressed = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", !isPressed ? "true" : "false");

      // Mengubah warna secara langsung untuk memastikan
      if (!isPressed) {
        button.style.color = "#bb6625"; // Warna aktif
      } else {
        button.style.color = "#e1e1e1"; // Warna non-aktif
      }
    });
  });
});
