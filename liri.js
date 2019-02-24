var mach = process.argv;
var commandToDo=mach[2];
var otherInput = mach.slice(3).join(" ");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify=require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
if(commandToDo==="concert-this"){

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
    .search({ type: 'track', query: str, limit:1})
    .then(function(response) {
        console.log(JSON.stringify(response,null,2));
      var primaryArist = response.tracks.items[0].album.artists[0].name;
      console.log("Primary artist: "+primaryArist);
    })
    .catch(function(err) {
      console.log(err);
    });
}
