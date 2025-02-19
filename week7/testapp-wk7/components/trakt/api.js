const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */

// Movie
//Function to retrieve a list of trending movies.
async function getTrendingMovies() {
  let reqUrl = `${trakt}/movies/trending?extended=full`; // the request url to get trending movies
  let response = await fetch(
    reqUrl,
    {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}
//Function to retrieve a list of studios by IMDB movie ID
async function getStudiosByMovieId(imdbId) {
  let reqUrl = `${trakt}/movies/${imdbId}/studios`; // the request url to get trending movies
  let response = await fetch(
    reqUrl,
    {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}


// Show
async function anticipatedShows() {
  let reqUrl = `${trakt}/shows/anticipated?extended=full?page=1&limit=15`; // the request url to get shows
  let response = await fetch(
    reqUrl,
    {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}


module.exports = {
  getTrendingMovies,
  getStudiosByMovieId,
  anticipatedShows
};