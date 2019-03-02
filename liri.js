var mach = process.argv;
var commandToDo=mach[2];
var otherInput = mach.slice(3).join(" ");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify=require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios=require("axios");

if(commandToDo==="concert-this"){
    bandInTownLookup(otherInput);
}else if(commandToDo==="spotify-this-song"){
    spotifyLookup(otherInput);
} else if(commandToDo==="movie-this"){
    omdbLookup(otherInput);
}else if(commandToDo==="do-what-it-says"){
    doRandomLookup();
} else{
    console.log("Not a valid command");
}
function spotifyLookup(str){
    spotify
    .search({ type: 'track', query: str, limit:5})
    .then(function(response) {
        // console.log(JSON.stringify(response,null,2));
    //   var primaryArist = response.tracks.items[0].album.artists[0].name;
    //   var otherArist = response.tracks.items[1].album.artists[0].name;
    //   var otherArist = response.tracks.items[1].album.artists[0].name;
      for (var i=0;i<response.tracks.items.length;i++){
        console.log("------------------------------------------------------------------");

          console.log("Artist: "+response.tracks.items[i].album.artists[0].name +"\n");
          console.log("Album: "+response.tracks.items[i].album.name +"\n");
          console.log("song: "+response.tracks.items[i].name +"\n");
          console.log("preview: "+response.tracks.items[i].preview_url +"\n");
          console.log("------------------------------------------------------------------");
      }


    //   console.log("Primary artist: "+primaryArist);
    //   console.log("second artist: "+otherArist);

    })
    .catch(function(err) {
      console.log(err);
    });
}

function bandInTownLookup(str){
    axios.get("https://rest.bandsintown.com/artists/" + str +  "?app_id=anything")
    .then(function(response){
        console.log(response);
    })
};

// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );
function omdbLookup(str){
    var queryURL = "https://www.omdbapi.com/?t=" + str + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then(function(response){
        console.log(response);
        console.log("Title: "+response.data.Title);
        console.log("Release year: "+response.data.Year);
        console.log("imdbRating: "+response.data.imdbRating);
        console.log("Rotten Tomatoes rating: "+response.data.Ratings[0]);
        console.log("Language(s): "+response.data.Language);
        console.log("Country: "+response.data.Country);
        console.log("Synopsis: "+response.data.Plot);
        console.log("Actors: "+response.data.Actors)
    });

}
//  * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
