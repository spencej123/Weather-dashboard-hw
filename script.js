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
    $("#weather-result").append(`<div id="result">
    <h1>${result.name}</h1>
    <p></p>
  </div>`);
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
