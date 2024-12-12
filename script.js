
let valueSearch = document.getElementById('valueSearch');
let city = document.querySelector('city');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let clouds = document.querySelector('.clouds');
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(valueSearch.value != ''){
        checkWeather();
    }
})

const apiKey = "5934d7c41c30f5c76770d6a905d6848e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&apikey=" + apiKey;

// const searchWeather = () => {
//     fetch(apiUrl + '&q=' + valueSearch.value)
//     .then(res => res.json)
//     .then(data => console.log(data))
// }
async function checkWeather() {
    const response = await fetch(apiUrl + "&q=" + valueSearch.value);
    var data = await response.json();
    if(data.cod == 200){
        city.querySelector('figcaption').innerText = data.name;
        city.querySelector('img').src = `"https://flagsapi.com/${data.sys.country}/shiny/32.png"`;
    }

    console.log(data)
    console.log(data.name)


}
