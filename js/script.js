// SAFE SLIDER (NO ERROR)
let track = document.getElementById("sliderTrack");

if (track) {
  let position = 0;

  function slide() {
    position -= 320;
    track.style.transform = `translateX(${position}px)`;

    if (position < -960) {
      position = 0;
    }

    setTimeout(slide, 3000);
  }

  slide();
}


// SAFE HERO SLIDER
let slides = document.querySelectorAll(".slides img");

if (slides.length > 0) {
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}


// ACTIVE NAV LINK
const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


// 🔥 TOGGLE MENU (FINAL WORKING)
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    // icon change
    menuBtn.innerHTML = navLinks.classList.contains("open") ? "✖" : "☰";
  });
}


