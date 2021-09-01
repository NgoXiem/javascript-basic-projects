const header = document.querySelector("header");
const bar = document.querySelector(".logo i");
const nav = document.querySelector(".header-nav");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", (e) => {
  window.scrollY > nav.clientHeight + 100
    ? header.classList.add("nav_fixed")
    : header.classList.remove("nav_fixed");
});

bar.addEventListener("click", (e) => {
  nav.classList.toggle("show-link");
});

// window.addEventListener("scroll", (e) => {
//   console.log(scrollX, scrollY);
// });

// window.addEventListener("mouseover", (e) => {
//   console.log(e.pageX, e.pageY);
// });

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(header.getBoundingClientRect().height);
    if (header.getBoundingClientRect().height === 63) {
      link.getAttribute("href") === "#about"
        ? scrollTo(0, 658)
        : link.getAttribute("href") === "#tours"
        ? scrollTo(0, 1561)
        : link.getAttribute("href") === "#services"
        ? scrollTo(0, 1142)
        : link.getAttribute("href") === "#gallery"
        ? scrollTo(0, 2618)
        : scrollTo(0, 0);
    } else if (header.getBoundingClientRect().height === 345) {
      link.getAttribute("href") === "#about"
        ? scrollTo(0, 655)
        : link.getAttribute("href") === "#tours"
        ? scrollTo(0, 2275)
        : link.getAttribute("href") === "#services"
        ? scrollTo(0, 1631)
        : link.getAttribute("href") === "#gallery"
        ? scrollTo(0, 4648)
        : scrollTo(0, 0);
      nav.classList.remove("show-link");
    }
  });
});
