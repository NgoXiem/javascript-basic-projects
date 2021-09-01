/*
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
let value = document.querySelector('#value');

let i = 0; 
reset.addEventListener('click', () => {
    i = 0;
    value.textContent = i;
});
increase.addEventListener('click', () => {
    i++;
    value.textContent = i;
    if(i<0) {
        value.style.color = "red";
    }
    if(i>0) {
        value.style.color = "green";
    }
    if(i===0) {
        value.style.color = "black";
    }
});
decrease.addEventListener('click', () => {
    i--;
    value.textContent = i;
    if(i<0) {
        value.style.color = "red";
    }
    if(i>0) {
        value.style.color = "green";
    }
    if(i===0) {
        value.style.color = "black";
    }
});
*/

const value = document.querySelector('#value');
const btns = document.querySelectorAll('button');

let i = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('reset')) {
            i = 0;
        }
        if(btn.classList.contains('increase')){
            i++;
        }
        if(btn.classList.contains('decrease')){
            i--;
        }
        if(i<0) {
            value.style.color = "red";
        }
        if(i>0) {
            value.style.color = "green";
        }
        if(i==0) {
            value.style.color = "black";
        }
        value.textContent = i;
        
    });
});