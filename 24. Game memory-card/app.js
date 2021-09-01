//card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ];


const grid = document.querySelector(".grid");
const result = document.getElementById('result');

cardArray.sort(() => 0.5 - Math.random());

cardArray.forEach((item, index) => {
  const img = document.createElement("img");
  img.setAttribute("src", "./images/blank.png");
  grid.appendChild(img);
});

const images = document.querySelectorAll('img');
let clickedImage = [];
let clickedIndex = [];
let tracking = [];
let score = 0;

images.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    tracking.push(cardArray[index].name);

   
    if(!e.target.classList.contains('matched')) {
        
      item.setAttribute("src", cardArray[index].img);
      
      e.target.setAttribute('id', index);

       if(clickedImage.length < 2) {
        clickedImage.push(cardArray[index].name);
        clickedIndex.push(index);
       }
  
      if(clickedImage.length === 2 && clickedIndex[0] !== clickedIndex[1]) {

        if(clickedImage[0] === clickedImage[1]) {
          const img0 = document.getElementById(clickedIndex[0]);
          const img1 = document.getElementById(clickedIndex[1]);
          setTimeout(() => {
            img0.setAttribute('src', "./images/white.png");
            img0.classList.add('matched');
            img1.setAttribute('src', "./images/white.png");
            img1.classList.add('matched');
          }, 500);
          clickedIndex.splice(0,2);
          clickedImage.splice(0,2);
          score++;
          result.textContent = score ;
          if(score === cardArray.length /2) {
            grid.innerHTML = `<h2>Congrat! You found all the matches</h2>`;
          }
        }

        if(clickedImage[0] !== clickedImage[1]) {
          const img0 = document.getElementById(clickedIndex[0]);
          const img1 = document.getElementById(clickedIndex[1]);
          setTimeout(() => {
            img0.setAttribute('src', "./images/blank.png");
            img1.setAttribute('src', "./images/blank.png");
          }, 300);
          clickedIndex.splice(0,2);
          clickedImage.splice(0,2);
        }
      }
      
      if(clickedImage.length === 2 && clickedIndex[0] === clickedIndex[1]) {
        const img0 = document.getElementById(clickedIndex[0]);
            const img1 = document.getElementById(clickedIndex[1]);
            setTimeout(() => {
              img0.setAttribute('src', "./images/blank.png");
              img1.setAttribute('src', "./images/blank.png");
            }, 300);
  
            clickedIndex.splice(0,2);
            clickedImage.splice(0,2);
      }
      
    }

  });
});
















  