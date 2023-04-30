const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile-nav");

const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("header-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Sticky header
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky")
    } else {
      document.body.classList.remove("sticky")
    }
  },
  {
    root: null, // for viewport
    threshold: 0,
    rootMargin: "-80px"
  }
);

observer.observe(sectionHeroEl);
