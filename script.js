const requirejs = require('requirejs');

requirejs.config({
    dotenv: require,
    nodeRequire: require
});

require('dotenv').config();

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";
const apiKey = process.env.API_KEY;

async function checkWeather() {
    const response = await fetch(apiUrl + `&apikey=${apiKey}`);
    var data = await response.json();

    console.log(data)

}

checkWeather();




// fetch('http://localhost:3000', {mode: "no-cors"})
// .then(res => res.text())
// .then(data => {
//     document.getElementsById('output').innerText = data;
// })