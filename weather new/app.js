
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
  let forcast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class= "row forecast-text">`;
  forcast.forEach(function (forecastDay, index) {
    if (index > 0) {
      if (index < 6) {
        forecastHTML =
          forecastHTML +
          `<div class="col-2">
        <div class="forecast-day">${formatDay(forecastDay.dt)}</div>
        <img src="http://openweathermap.org/img/wn/${
          forecastDay.weather[0].icon
        }@2x.png" alt="Clouds" width="42" id="icon" />
        <div class="forecast-temperature">
          <span class="forecast-temperature-max"><strong> ${Math.round(
            forecastDay.temp.max
          )}º</strong></span>
          <span class="forecast-temperature-min"></span> ${Math.round(
            forecastDay.temp.min
          )}º </span>
        </div>
      </div>`;
      }
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function getForecast(coordinates) {
  let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
  let unit = "metric";
  let apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";
  axios.get(apiUrl).then(displayForecast);
}

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.timezone;
  document.querySelector("#temperature").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#wheather-discription").innerHTML =
    response.data.alerts[0].description;
  document.querySelector("#pressure").innerHTML = response.data.current.pressure;
  document.querySelector("#humidity").innerHTML = response.data.current.humidity;
  document.querySelector("#wind").innerHTML = response.data.current.wind_speed;
    console.log(response.data);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt",response.data.current.weather[0].icon);

  celsiusTemperature = response.data.current.temp;
  getForecast(response.data.coord);
}

function searchCity(city) {
  let apiKey = "b110a6f2cf89a7609c27cec0f53fa75b";
  let unit = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data";
  let apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function showCurrentTemperature(position) {
  let apiKey = "b110a6f2cf89a7609c27cec0f53fa75b";
  let units = "metric";
  let apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=41.99646&lon=21.43141&units=metric&exclude=minutely&appid=83cf676a48739fd57b023a3d32f2ef8b";
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentTemperature);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

searchCity("Skopje");

function myHomeFunction() {
  document.getElementById("forecast").style.display = "none";
  document.getElementById("main-location").style.display = "flex";
  document.getElementById("weather-details").style.display = "flex";
  document.getElementById("about").style.display = "none";

}

function myHourlyFunction() {
  document.getElementById("forecast").style.display = "flex";
  document.getElementById("main-location").style.display = "flex";
  document.getElementById("weather-details").style.display = "none";
  document.getElementById("about").style.display = "none";
}

function myAboutFunction() {
  document.getElementById("forecast").style.display = "none";
  document.getElementById("weather-details").style.display = "none";
  document.getElementById("main-location").style.display = "none";
  document.getElementById("about").style.display = "flex";
}