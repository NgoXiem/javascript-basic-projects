// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

/*
const btns = document.querySelectorAll('button');
const review = document.querySelector('.review');


const changeContent = (i) => {
  review.innerHTML =
  ` <div class="img-container">
  <img src=${reviews[i].img} id="person-img" alt="" />
</div>
<h4 id="author">${reviews[i].name}</h4>
<p id="job">${reviews[i].job}</p>
<p id="info">
  ${reviews[i].text}
</p>
<!-- prev next buttons-->
<div class="button-container">
  <button class="prev-btn">
    <i class="fas fa-chevron-left"></i>
  </button>
  <button class="next-btn">
    <i class="fas fa-chevron-right"></i>
  </button>
</div>
<!-- random button -->
<button class="random-btn">surprise me</button>
`  
};


let index = 0;

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('random-btn')) {
      index = Math.floor(Math.random()*reviews.length);
      changeContent(index);
    }

    
    if(btn.classList.contains('next-btn')){
      index++;
      if(index > reviews.length - 1) {
        index = 0;
      }
      changeContent(index);
    }

    if(btn.classList.contains('prev-btn')){
      index--;
      if(index < 0) {
        index = reviews.length + index;
      }
      changeContent(index);
    }
    
  });
});
*/

const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const random = document.querySelector('.random-btn');

let img = document.querySelector('#person-img');
let name = document.querySelector('#author');
let job = document.querySelector('#job');
let text = document.querySelector('#info');

const changeContent = (i) => {
  img.src = reviews[i].img;
  name.textContent = reviews[i].name;
  job.textContent = reviews[i].job;
  text.textContent = reviews[i].text;
};

random.addEventListener('click', () =>{
  let index = Math.floor(Math.random()*reviews.length);
  changeContent(index);
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  if(index > reviews.length - 1) {
      index = 0;
  }
  changeContent(index);
});

prev.addEventListener('click', () => {
  index--;
  if(index < 0) {
      index = reviews.length - 1;
  }
  changeContent(index);
});