/*starting With Variables*/ 
function initPage() {
  let inputEl = document.getElementById("city-input");
  let searchEl = document.getElementById("search-button");
  let clearEl = document.getElementById("clear-history");
  let nameEl = document.getElementById("city-name");
  let currentPicEl = document.getElementById("current-pic");
  let currentTempEl = document.getElementById("temperature");
  let currentHumidityEl = document.getElementById("humidity");4
  let currentWindEl = document.getElementById("wind-speed");
  let currentUVEl = document.getElementById("UV-index");
  let historyEl = document.getElementById("history");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
  console.log(searchHistory);

/*Storing the API*/

function getWeather(cityName) {
  let queryUrl = 
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=fa896ed47bc3eefe52d8d9fe53f94e29";
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then((result) => {
    // append the results to the page
    // JQuery has a .append() method
    console.log(result);
    let currentDate = new Date(response.data.dt*1000);
            console.log(currentDate);
            let day = currentDate.getDate();
            let month = currentDate.getMonth() + 1;
            let year = currentDate.getFullYear();
            nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
            let weatherPic = response.data.weather[0].icon;
            currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPicEl.setAttribute("alt",response.data.weather[0].description);
            currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
            currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
            currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
        let lat = response.data.coord.lat;
        let lon = response.data.coord.lon;
        let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
        axios.get(UVQueryURL)
        .then(function(response){
            let UVIndex = document.createElement("span");
            UVIndex.setAttribute("class","badge badge-danger");
            UVIndex.innerHTML = response.data[0].value;
            currentUVEl.innerHTML = "UV Index: ";
            currentUVEl.append(UVIndex);
        });
}

$(document).ready(() => {
  // Need to be able to put in a city and get the weather forecast for that city
  // Make a form and a button so that someone can enter input
  // Make some way for the form to genrate something we are looking for
  // Make an event that takes the form input and gives it to our api
  const form = document.getElementById("search_btn");

  form.addEventListener("click", (e) => {
    e.preventDefault();
    let search_value = document.getElementById("search_text").value;
    search(search_value);
  });
  // Take the form input apasses it tnd o a function that calls the weather api api
  // Make a div that allows the object to show up on the page.
  // Connect the div to the api response
});
