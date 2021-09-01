const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');

for (i=0; i<9; i++){
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.appendChild(img);
    gallery.appendChild(div);  
   
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const value = form.term.value;
    localStorage.setItem('gallery', value);
    form.reset();

    getImg(value)
    .then(data => {
        updateUI(data);
        console.log(data);
    })
    .catch(err => console.log(err));
    
});

const getImg = async (value) => {
    const key ="-Sl1KbKzve0uutlgJs25bYTIY0f-dpg5wYSY2xIbE7g"
    const base = "https://api.unsplash.com/search/photos";
    const url = `${base}?page=1&query=${value}&client_id=${key}`
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
    
};


const updateUI = (data) => {
    
    const imgs = document.querySelectorAll('img');
    
    imgs.forEach((img, index) => {
        img.setAttribute('src', data[index].urls.full);
    });
};


window.addEventListener('DOMContentLoaded', e => {
    if(localStorage.getItem('gallery')) {
        getImg(localStorage.getItem('gallery'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
    }
});