/*Storing the API*/

function search(city) {
  let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa896ed47bc3eefe52d8d9fe53f94e29`;
  let full_query_url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=fa896ed47bc3eefe52d8d9fe53f94e29";
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then((res) => {
    // append the results to the page
    // JQuery has a .append() method
    console.log(res);
  });
}

$(document).ready(() => {
  //search("New York");
  // Need to be able to put in a city and get the weather forecast for that city
  // Make a form and a button so that someone can enter input
  // Make some way for the form to genrate something we are looking for
  // Make an event that takes the form input and gives it to our api
  // Take the form input and passes it to a function that calls our api
});
