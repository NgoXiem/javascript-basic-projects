// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const btn = document.querySelector('button');
const links = document.querySelector('.links');

btn.addEventListener('click', () => {
    links.classList.toggle('show-links');
})