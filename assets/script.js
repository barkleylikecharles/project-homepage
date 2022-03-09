var weatherFormEl = document.querySelector("#weather-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var citySearchInput = cityInputEl.value.trim();

    if (citySearch) {
        cityInputEl.value= "";
    } else {
        alert("Please enter a city name");
    }
    console.log(event);
}
var weatherApiKey = "861519be9cbc12d19fad9bfb53a63d3e";

var getCityWeather = function(city) {
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearchInput + "&Appid=" + weatherApiKey + "&units=imperial";

    fetch(urlCurrent).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data, city)
            })
        }
    })
}



var news;
var newsApiKey = '6trXJd0Eo4FqEF8nrJx7s62Sd6sVlKys'
var queryURL = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key='+ newsApiKey


fetch(queryURL)
    .then(response => response.json())
    .then((data) => {
        console.log(data.results);
        displayNews(data.results);
    });

;

var title, abstract, articleUrl;

function displayNews(data) {
    news = data;
    
    for(var i = 0; i < 5; i ++){
        title = news[i].title;
        abstract = news[i].abstract;
        articleUrl = news[i].url;
        console.log(news[i].title);

        createCard(title, abstract, articleUrl);
    }
}

function createCard(t, a, u){
    var card = document.createElement("div");
    // card.innerHTML = "<h2>"+t+"</h2><p>"+a+"</p>";
    card.innerHTML = `
    <h2>${t}</h2>
    <p>${a}</p>
    <p><a href="${u}" target="_blank">${u}</a></p>
    `;

    document.getElementById('card-2').appendChild(card);

}
// var displayNews = function() {
//     for (i=0, )
// }


// var tasks = {};

// var createTask = function(taskText, taskDate, taskList) {
//   // create elements that make up a task item
//   var taskLi = $("<li>").addClass("list-group-item");
//   var taskSpan = $("<span>")
//     .addClass("badge badge-primary badge-pill")
//     .text(taskDate);
//   var taskP = $("<p>")
//     .addClass("m-1")
//     .text(taskText);

//   // append span and p element to parent li
//   taskLi.append(taskSpan, taskP);

// // check due date
// auditTask(taskLi);

//   // append to ul list on the page
//   $("#list-" + taskList).append(taskLi);
// };

// var loadTasks = function() {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

//   // if nothing in localStorage, create a new object to track all task status arrays
//   if (!tasks) {
//     tasks = {
//       toDo: [],
//       inProgress: [],
//       inReview: [],
//       done: []
//     };
//   }

//   // loop over object properties
//   $.each(tasks, function(list, arr) {
//     console.log(list, arr);
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTask(task.text, task.date, list);
//     });
//   });
// };

// var saveTasks = function() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };