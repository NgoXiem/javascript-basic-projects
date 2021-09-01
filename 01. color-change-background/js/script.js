const colors = ["red", "green", "blue", "purple", "yellow", "gray", "hotpink"];
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[random];
});