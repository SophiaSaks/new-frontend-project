
let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let clouds = document.querySelector('.clouds');
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let form = document.querySelector('form');
let figcaption = document.getElementById('figcaption');
let main = document.querySelector('main');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(valueSearch.value != ''){
        checkWeather();
    }
})

const apiKey = "5934d7c41c30f5c76770d6a905d6848e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&apikey=" + apiKey;

async function checkWeather() {
    const response = await fetch(apiUrl + "&q=" + valueSearch.value);
    var data = await response.json();
    if(data.cod == 200){
        city.querySelector('figcaption').innerText = data.name;
        city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/flat/32.png`;

        temperature.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        temperature.querySelector('span').innerText = Math.round(data.main.temp);

        description.innerText = data.weather[0].description;

        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
    }else{
        main.classList.add('error');
        setTimeout(() => {
            main.classList.remove('error')
        }, 1000);
    }

    valueSearch.value = '';
}

