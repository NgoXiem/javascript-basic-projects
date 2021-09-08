const button = document.querySelector('button');
const imgs = document.querySelectorAll('.square');
const displayScore = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')

let score = 0;
let time = 10;
let isClicked = false; 
    
button.addEventListener('click', () => {
    const displayImg = setInterval(() => {
        const randomNum = Math.floor(Math.random()*9);
        const randomGrid = document.getElementById(randomNum);
        randomGrid.classList.add('mole');
        setTimeout(() => {
            imgs.forEach(item => item.classList.remove('mole'));
        }, 700);
    }, 1000);

    // const removeImg = setInterval(() => {
    //     imgs.forEach(item => item.classList.remove('mole'));
    // }, 1500)

    button.remove();
    
    imgs.forEach(item => {
        item.addEventListener('click', e => {
            
            if(e.target.classList.contains('mole')){
                score ++;
            }
            displayScore.textContent = score;
        });
    });

    const timeFunc = setInterval(() => {
        time--;
        timeLeft.textContent = time;
        if(time === 0) {
            clearInterval(displayImg);
            clearInterval(timeFunc);
            
        }
    }, 1000);

});


    

    

    



