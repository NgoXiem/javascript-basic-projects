const dots = document.querySelectorAll(".buttons span");
const images = document.querySelectorAll("img");
let counter = 0;
let repeater;

const autoplay = () => {
  repeater = setInterval(() => {
    images.forEach((image) => image.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    counter++;
    if (counter > images.length - 1) {
      counter = 0;
    }
    images[counter].classList.add("active");
    dots[counter].classList.add("active");
  }, 3000);
};

autoplay();

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(repeater);
    images.forEach((image) => image.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
    images[index].classList.add("active");
    counter = index;
    autoplay();
  });
});
