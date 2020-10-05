//function getTime(timestamp) {
//    let currentTime = new Date(timestamp);
//    let hours = currentTime.getHours();
//    if (hours < 10) {
//        hours = `0${hours}`;
//        let minutes = currentTime.minutes();
//        if (minutes < 10) {
//            minutes = `0${hours}`;
//            let day = currentTime.getDay();
//
//            return `- ${day} ${hours}:${minutes}`;
//        }

function displayWeather(response) {
  console.log(response.data);
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let temperature = document.querySelector("#current-temp");
  let feelsLikeTemp = document.querySelector("#feels-like-temp");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windspeed");
  let currentTime = document.querySelector("#current-time");

  city.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  temperature.innerHTML = Math.round(response.data.main.temp);
  feelsLikeTemp.innerHTML = Math.round(response.data.main.feels_like);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  currentTime.innerHTML = ` - Monday 15:00`;
  //getTime(response.data.dt * 1000);
}

function search(city) {
  let apiKey = "427b64eee1edb35b88796269421b55f1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  search(cityInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
