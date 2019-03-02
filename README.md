# LIRI
This is a node based application that utilizes APIs to return an output based on user input
#IN ORDER TO USE THIS, YOU NEED YOUR OWN API KEY FROM SPOTIFY IN A DOTENV



The valid commands are:
* `concert-this` followed by a band/artist
* `spotify-this-song` followed by a song
* `movie-this` followed by a movie title
* `do-what-it-says`


input in git bash: `node liri concert-this <band/artist name here, spaces OK>`  
[Sample Concert Request Output](./assets/concert.png)  


input in git bash: `node liri spotify-this-song <song name here, spaces OK>`  
[Sample Spotify Request](./assets/spotify.png)  

input in git bash: `node liri movie-this <movie name here, spaces OK>`  
[Sample Movie Request](./assets/movie.png)  

The concert request will return all upcoming concerts.
The song request will return the 5 best matches for a song search.
The movie request will return the best 1 movie match for the search.