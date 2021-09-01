
const key = "4uLGkfb2Tcnd9HtlGsVK2WV9aY8HGU4n";


//get city id
const getCity = async (city) => {
    const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const cityURL = `${baseURL}?apikey=${key}&q=${city}`;
    const response = await fetch(cityURL);
    const data = await response.json();
    return data[0];
    //console.log(data[0]);
};

//getCity('new york')

const getWeather = async (id) => {
    const baseURL ="http://dataservice.accuweather.com/currentconditions/v1/";
    const weatherURL = `${baseURL}${id}?apikey=${key}`;  
    const response = await fetch(weatherURL);
    const data = response.json();
    return data;
    //data.then(data => console.log(data));
};

//getWeather(349727);

