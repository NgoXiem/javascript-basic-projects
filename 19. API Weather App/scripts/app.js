const form = document.querySelector('form');
const input = document.querySelector('input');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');



card.classList.add('d-none');

const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather[0].WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather[0].Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    </div>
    `   

    //display card

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    
    //display icons
   
    const iconSrc = `icons/${weather[0].WeatherIcon}.svg` 
    icon.setAttribute("src", iconSrc);
    
    const timeSrc = (weather[0].IsDayTime) ? "day.svg" : "night.svg";
    time.setAttribute("src", timeSrc);
};

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return {cityDets, weather};
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //update the UI 
    const city = e.target.city.value.trim();
    localStorage.setItem ("city", city);
    form.reset();

    updateCity(city)
    .then(data => {
        //console.log(data)
        updateUI(data);
    })
    .catch(err => console.log(err));

});

update = () => {
    if(localStorage.getItem("city")) {
        updateCity(localStorage.getItem("city"))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    }
}

window.addEventListener('DOMContentLoaded',update());



