 const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.querySelector('i').setAttribute(
      'data-lucide',
      mobileMenu.classList.contains('hidden') ? 'menu' : 'x'
    );
    if (window.lucide) lucide.replace();
  });



// =========================
// 1️⃣ Navbar Mobile Toggle
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isOpen = false;

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      isOpen = !isOpen;
      mobileMenu.classList.toggle("hidden");

      // Toggle icons (Lucide)
      menuBtn.innerHTML = isOpen
        ? '<i data-lucide="x" class="w-8 h-8"></i>'
        : '<i data-lucide="menu" class="w-8 h-8"></i>';

      if (window.lucide) window.lucide.createIcons();
    });
  }

  // =========================
  // 2️⃣ AOS Init
  // =========================
  if (window.AOS) {
    AOS.init({ duration: 800, once: true });
  }

  // =========================
  // 3️⃣ Swiper Initialization
  // =========================
  if (typeof Swiper !== "undefined") {
    document.querySelectorAll(".mySwiper").forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    });
  }

  // =========================
  // 4️⃣ Contact Form (Optional Alert)
  // =========================
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actual submission
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }
});
