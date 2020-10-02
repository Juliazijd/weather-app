function displayWeather(response) {
  console.log(response.data);
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let temperature = document.querySelector("#current-temp");
  let feelsLikeTemp = document.querySelector("#feels-like-temp");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windspeed");

  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  temperature.innerHTML = Math.round(response.data.main.temp);
  feelsLikeTemp.innerHTML = Math.round(response.data.main.feels_like);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "427b64eee1edb35b88796269421b55f1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather);
