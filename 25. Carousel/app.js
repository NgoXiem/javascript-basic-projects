const container = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel-item");
prevBtn = document.querySelector(".prev-btn");
nextBtn = document.querySelector(".next-btn");
let counter = 0;

nextBtn.addEventListener("click", () => {
  images.forEach((image) => image.classList.remove("active"));
  counter++;
  if (counter > images.length - 1) {
    counter = 0;
  }
  //console.log(counter);
  images[counter].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  images.forEach((image) => image.classList.remove("active"));
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  //console.log(counter);
  images[counter].classList.add("active");
});

let repeater;

const autoplay = () => {
  repeater = setInterval(() => {
    images.forEach((image) => image.classList.remove("active"));
    counter++;
    if (counter > images.length - 1) {
      counter = 0;
    }
    images[counter].classList.add("active");
  }, 4000);
};
autoplay();

container.addEventListener("mouseover", () => {
  clearInterval(repeater);
});

container.addEventListener("mouseleave", () => {
  autoplay();
});
