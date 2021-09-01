const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];
const btn = document.querySelector('#btn');
const hexValue = document.querySelector('#hex-value');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    // let n1 =  elements[Math.floor(Math.random()*elements.length)];
    // let n2 =  elements[Math.floor(Math.random()*elements.length)];
    // let n3 =  elements[Math.floor(Math.random()*elements.length)];
    // let n4 =  elements[Math.floor(Math.random()*elements.length)];
    // let n5 =  elements[Math.floor(Math.random()*elements.length)];
    // let n6 =  elements[Math.floor(Math.random()*elements.length)];
    // let hex = `#${n1}${n2}${n3}${n4}${n5}${n6}`;

    
    let hex = "#";
    for (i=0; i<6; i++) {
        let index = Math.floor(Math.random()*elements.length);
        hex += elements[index];
    }
    
    hexValue.textContent = hex;
    body.style.backgroundColor = hex;
});