// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// ********** fixed navbar ************

const nav = document.querySelector('#nav');
const linkContainer = document.querySelector('.links-container');
const topLink = document.querySelector('.top-link');



window.addEventListener('scroll', () => {
    //console.log(window.pageYOffset)
    const navHeight = nav.getBoundingClientRect().height;
    //console.log(navHeight);
    if(window.pageYOffset > navHeight) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }

    // display arrow to back to the top
    if(window.pageYOffset > 1690) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
}); 

// ********** close links ************
nav.addEventListener('click', e => {
    //console.log(e.target.tagName);
    if(e.target.tagName === 'I') {
         if(linkContainer.classList.contains('show-links')){
            linkContainer.classList.remove('show-links');
         } else {
            linkContainer.classList.add('show-links');
         }
    }
});


// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        
        //calculate the heights
        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;

        let position = element.offsetTop - navHeight;
        if(!nav.classList.contains('fixed-nav')){
            position = position - navHeight;
            console.log(position);
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position
        });
        linkContainer.classList.remove('show-links')
    });
});