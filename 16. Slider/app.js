const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const slides = document.querySelectorAll('.slide');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
let count = 0;

nextBtn.addEventListener('click', e => {
    count++;
    carousel();
    //console.log(count);
});

prevBtn.addEventListener('click', e => {
    count--;
    carousel();
    //console.log(count);
});

carousel = () => {
    if (count < slides.length - 1) {
        nextBtn.style.display = "block";
      } else {
        nextBtn.style.display = "none";
      }
      if (count > 0) {
        prevBtn.style.display = "block";
      } else {
        prevBtn.style.display = "none";
      }

    console.log(count);

    slides.forEach(slide => {
        slide.style.transform = `translatex(${-count*100}%)`;
    });
    
};
prevBtn.style.display = "none";


