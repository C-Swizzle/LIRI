# LIRI
This is a node based application that utilizes APIs to return an output based on user input
#IN ORDER TO USE THIS, YOU NEED YOUR OWN API KEY FROM SPOTIFY IN A DOTENV



The valid commands are:
* `concert-this` followed by a band/artist
* `spotify-this-song` followed by a song
* `movie-this` followed by a movie title
* `do-what-it-says`

[Sample Concert Request](./assets/concert.png)\n
[Sample Spotify Request](./assets/spotify.png)\n
[Sample Movie Request](./assets/movie.png)\n

The concert request will return all upcoming concerts.
The song request will return the 5 best matches for a song search.
The movie request will return the best 1 movie match for the search.