const form = document.querySelector('form');
const iframe = document.querySelector('iframe');
const info = document.querySelector('.info');
const list = document.querySelector('.list');

//fetch API//

const getVideos = async (term) => {
    const key = "AIzaSyBlQLPrq6BVbgUZhoB5oKNEmNWjeY3TkMA";
    const base =  "https://www.googleapis.com/youtube/v3/search"
    const url = `${base}?part=snippet&q=${term}&key=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data.items;
};

// create 5 divs for video items

for(i=0; i<5; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'thumbnail');
    list.appendChild(div);
}

//submit event//

form.addEventListener('submit', e => {
    
    //prevent default behaviour
    e.preventDefault();

    //store value
    const value = form.term.value.trim();
    localStorage.setItem('video', value);
    
    //reset form
    form.reset();

    //update UI
    getVideos(value)
    .then(data => {
        
        //Embed videos
        let videoSrc = `http://www.youtube.com/embed/${data[0].id.videoId}`;
        iframe.setAttribute("src", videoSrc);
        info.innerHTML = `
        <h3>${data[0].snippet.title}</h3>
        <p>${data[0].snippet.description}</p>
        `;

        //display list of video items
        
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.innerHTML = `
            <a class="item">
                <img src=${data[index].snippet.thumbnails.default.url} alt="">
                <p>${data[index].snippet.title}</p>
            </a>`;
        });

        // add click event on video items
        const links = document.querySelectorAll('.item');
        links.forEach((link, index) => {
            link.addEventListener('click', e => {
                videoSrc = `http://www.youtube.com/embed/${data[index].id.videoId}`;
                iframe.setAttribute("src", videoSrc);
                info.innerHTML = `
                <h3>${data[index].snippet.title}</h3>
                <p>${data[index].snippet.description}</p>
                `;
            });
        });
    }) 
    .catch(err => console.log(err));
});

// DOMContentLoaded and localStorage //

const displayFirstValue = (value) => {
    getVideos(value)
    .then(data => {
        
        //Embed videos

        let videoSrc = `http://www.youtube.com/embed/${data[0].id.videoId}`;
        iframe.setAttribute("src", videoSrc);
        info.innerHTML = `
        <h3>${data[0].snippet.title}</h3>
        <p>${data[0].snippet.description}</p>
        `;

        //display list of video items

        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.innerHTML = `
            <a class="item">
                <img src=${data[index].snippet.thumbnails.default.url} alt="">
                <p>${data[index].snippet.title}</p>
            </a>`;
        });
        
         // add click event on video items
         const links = document.querySelectorAll('.item');
         links.forEach((link, index) => {
             link.addEventListener('click', e => {
                 videoSrc = `http://www.youtube.com/embed/${data[index].id.videoId}`;
                 iframe.setAttribute("src", videoSrc);
                 info.innerHTML = `
                 <h3>${data[index].snippet.title}</h3>
                 <p>${data[index].snippet.description}</p>
                 `;
             });
         });

    })
    .catch(err => console.log(err));
};

if(localStorage.getItem("video")){
    displayFirstValue(localStorage.getItem("video"));
}
