

//update deadline
const weekday =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const giveAway = document.querySelector('.giveaway');

//const deadline = new Date(now.getTime()+ 10*24*3600*1000+4500000);
const deadline = new Date('January 21, 2022 23:15')
giveAway.textContent =  ` giveaway ends on ${weekday[deadline.getDay()]}, ${deadline.getDate()} ${months[deadline.getMonth()]} ${deadline.getFullYear()}, ${deadline.getHours()}`;

//countdown

const items = document.querySelectorAll('.deadline-format h4');

const oneDay = 24*3600*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;

const update = () => {
    const now = new Date();
    const gap = deadline.getTime() - now.getTime();
    const day = Math.floor(gap/oneDay);
    const hour = Math.floor((gap % oneDay) /oneHour);
    const minute = Math.floor((gap % oneHour)/oneMinute);
    const second = Math.floor((gap % oneMinute)/1000);
    
    const values = [day, hour, minute, second];

    items.forEach((item, index) => {
        item.textContent = values[index]; 
    });
};

setInterval(update, 1000);

update();
