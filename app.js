function getTime(timestamp) {
  let currentTime = new Date(timestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  return `${day} ${displayForecastHours(timestamp)}`;
}

function displayForecastHours(timestamp) {
  let currentTime = new Date(timestamp);
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function displayWeather(response) {
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let temperature = document.querySelector("#current-temp");
  let feelsLikeTemp = document.querySelector("#feels-like-temp");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windspeed");
  let currentTime = document.querySelector("#current-time");
  let weatherIcon = document.querySelector("#weather-icon");

  celsiusTemp = response.data.main.temp;

  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  temperature.innerHTML = Math.round(response.data.main.temp);
  feelsLikeTemp.innerHTML = Math.round(response.data.main.feels_like);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed * 3.29084);
  currentTime.innerHTML = getTime(response.data.dt * 1000);
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", response.data.weather[0].description);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.list[0];
  forecastElement.innerHTML = `
                <div class="col-2">
                  <h4 id="forecast-hours">${displayForecastHours(
                    forecast.dt * 1000
                  )}</h4>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      forecast.weather[0].icon
                    }@2x.png"
                    alt="${forecast.weather[0].description}"
                    class="forecast-icon"
                  />
                  <strong id="forecast-temp">${Math.round(
                    forecast.main.temp
                  )}°C </strong>| ${Math.round(
    (forecast.main.temp * 5) / 9 + 32
  )}°F
                   <div id="forecast-windspeed"> ${Math.round(
                     forecast.wind.speed * 3.29084
                   )}km/h</div>
                </div>`;

  forecast = response.data.list[1];
  forecastElement.innerHTML += `
                  <div class="col-2">
                  <h4 id="forecast-hours">${displayForecastHours(
                    forecast.dt * 1000
                  )}</h4>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      forecast.weather[0].icon
                    }@2x.png"
                    alt="${forecast.weather[0].description}"
                    class="forecast-icon"
                  />
                  <strong id="forecast-temp">${Math.round(forecast.main.temp)}°C
  </strong>| ${Math.round((forecast.main.temp * 5) / 9 + 32)}°F
                   <div id="forecast-windspeed"> ${Math.round(
                     forecast.wind.speed * 3.29084
                   )}km/h</div>
                </div>`;

  forecast = response.data.list[2];
  forecastElement.innerHTML += `
                  <div class="col-2">
                  <h4 id="forecast-hours">${displayForecastHours(
                    forecast.dt * 1000
                  )}</h4>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      forecast.weather[0].icon
                    }@2x.png"
                    alt="${forecast.weather[0].description}"
                    class="forecast-icon"
                  />
                  <strong id="forecast-temp">${Math.round(
                    forecast.main.temp
                  )}°C </strong>| ${Math.round(
    (forecast.main.temp * 5) / 9 + 32
  )}°F
                   <div id="forecast-windspeed"> ${Math.round(
                     forecast.wind.speed * 3.29084
                   )}km/h</div>
                </div>`;

  forecast = response.data.list[3];
  forecastElement.innerHTML += `
                  <div class="col-2">
                  <h4 id="forecast-hours">${displayForecastHours(
                    forecast.dt * 1000
                  )}</h4>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      forecast.weather[0].icon
                    }@2x.png"
                    alt="${forecast.weather[0].description}"
                    class="forecast-icon"
                  />
                  <strong id="forecast-temp">${Math.round(
                    forecast.main.temp
                  )}°C </strong>| ${Math.round(
    (forecast.main.temp * 5) / 9 + 32
  )}°F
                   <div id="forecast-windspeed"> ${Math.round(
                     forecast.wind.speed * 3.29084
                   )}km/h</div>
                </div>`;

  forecast = response.data.list[4];
  forecastElement.innerHTML += `
                  <div class="col-2">
                  <h4 id="forecast-hours">${displayForecastHours(
                    forecast.dt * 1000
                  )}</h4>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      forecast.weather[0].icon
                    }@2x.png"
                    alt="${forecast.weather[0].description}"
                    class="forecast-icon"
                  />
                  <strong id="forecast-temp">${Math.round(
                    forecast.main.temp
                  )}°C </strong>| ${Math.round(
    (forecast.main.temp * 5) / 9 + 32
  )}°F
                   <div id="forecast-windspeed"> ${Math.round(
                     forecast.wind.speed * 3.29084
                   )}km/h</div>
                </div>`;

  forecast = response.data.list[5];
  forecastElement.innerHTML += `
                  <div class="col-2">
                  <h4 id="forecast-hours">${displayForecastHours(
                    forecast.dt * 1000
                  )}</h4>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      forecast.weather[0].icon
                    }@2x.png"
                    alt="${forecast.weather[0].description}"
                    class="forecast-icon"
                  />
                  <strong id="forecast-temp-max">${Math.round(
                    forecast.main.temp
                  )}°C </strong>| ${Math.round(
    (forecast.main.temp * 5) / 9 + 32
  )}°F
                   <div id="forecast-windspeed"> ${Math.round(
                     forecast.wind.speed * 3.29084
                   )}km/h</div>
                </div>`;
}

function search(city) {
  let apiKey = "427b64eee1edb35b88796269421b55f1";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  search(cityInput.value);
}

function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "427b64eee1edb35b88796269421b55f1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector("#current-temp");
  celsiusTempElement.classList.remove("active");
  fahrenheitTempElement.classList.add("active");
  let fahrenheitTemp = Math.round((celsiusTemp * 5) / 9 + 32);
  temperature.innerHTML = fahrenheitTemp;
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector("#current-temp");
  celsiusTempElement.classList.add("active");
  fahrenheitTempElement.classList.remove("active");
  temperature.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#search-current-location");
currentLocationButton.addEventListener("click", getPosition);

let fahrenheitTempElement = document.querySelector("#fahrenheit-link");
fahrenheitTempElement.addEventListener("click", displayFahrenheitTemp);

let celsiusTempElement = document.querySelector("#celsius-link");
celsiusTempElement.addEventListener("click", displayCelsiusTemp);

search("Amsterdam");
