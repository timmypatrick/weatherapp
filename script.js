const weatherApiUrl1 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherApiUrl2 = "&appid=3058a6cb83d8b11b2de32118defaa275";
let userCity = document.querySelector(".search > input");
let searchButton = document.querySelector(".search > button");
let errorMessage = document.querySelector(".error-message");
let weatherInfo = document.querySelector(".weather");
let weatherImage = document.querySelector(".weather > img");
let city = document.querySelector(".city");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let humidityIcon = document.querySelector(".humidity-icon");
let humidityText = document.querySelector(".humidity-text");
let windText = document.querySelector(".wind-text");
let windIcon = document.querySelector(".wind-icon");

async function weatherApp(cityName){
    let request = await fetch(`${weatherApiUrl1}${cityName}${weatherApiUrl2}`);
    
    if (request.status === 200) {
        let information = await request.json();
        city.textContent = information.name;
        temperature.textContent = `${information.main.temp} \u00B0C`;
        humidity.textContent = `${information.main.humidity}%`;
        wind.textContent = `${information.wind.speed}km/h`;
        humidityText.textContent = "Humidity";
        windText.textContent = "Wind";
        humidityIcon.src = "images/humidity.png";
        windIcon.src = "images/wind.png";
        weatherInfo.style.display = "block";
        errorMessage.style.display = "none";

        if (information.weather[0].main.toLowerCase() === "clear") {
            weatherImage.src = "images/clear.png";
        }
    
        else if (information.weather[0].main.toLowerCase() === "clouds") {
            weatherImage.src = "images/clouds.png";
        }
    
        else if (information.weather[0].main.toLowerCase() === "drizzle") {
            weatherImage.src = "images/drizzle.png";
        }
    
        else if (information.weather[0].main.toLowerCase() === "midst") {
            weatherImage.src = "images/midst.png";
        }
    
        else if (information.weather[0].main.toLowerCase() === "rain") {
            weatherImage.src = "images/rain.png";
        }
    
        else if (information.weather[0].main.toLowerCase() === "snow") {
            weatherImage.src = "images/snow.png";
        }
    } else {
        errorMessage.style.display = "block";
        weatherInfo.style.display = "none";
}
    
}

searchButton.addEventListener("click", () => {
    weatherApp(userCity.value);
    userCity.value =""    
})