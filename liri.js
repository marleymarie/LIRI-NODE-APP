require("dotenv").config();
//I read to put this at the top of the liri.js page and a file will load for it.

var axios = require("axios");

var fs = require("fs");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

//var moment = require('moment');






//for the Concert-this/bands in town.
function concert() {
    var artist = userInput
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(queryURL);
    console.log(artist);
    axios.get(queryURL).then(function (response) {
        for (i = 0; i < 10; i++) {
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.city);
            console.log(response.data[i].datetime);
            console.log("---------------------")
        }
    })
        .catch(function (error) {
            if (error.response) {
              
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Sorry, this band doesn't have any upcoming shows.");
            }
            console.log(error.config);
        });
}

//for the spotify this song part
function spotify() {
    //accesses node-spotify-api
    var Spotify = require("node-spotify-api");
    //pushes spotify keys to object to be used by node-spotify-api
    var spotify = new Spotify(keys.spotify);

   //couldnt figure out the code for the spotify information 
    
   //(I understand the catch function to see if there are any errors in the code)
   //.catch(function(err) {
       // console.log(err);
     // });
}

//node liri.js movie-this '<movie name here>'
function movie() {

var movieName = userInput;

// Then run a request with axios to the OMDB API with the movie specified
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryURL).then(function(response) {
  //Console.logs
})
.catch(function(error){
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
       
        console.log("Error", error.message);
      }
      console.log(error.config);
});


console.log(queryURL);
}

//for the doWhat command
function doWhat() {
var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data
    console.log(data);
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    command = dataArr[0];
    
    userInput = dataArr[1]

    options();
  });
}

function options() { 
    switch (command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhat();
        break;
}};





