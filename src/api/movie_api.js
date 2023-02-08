import {
  MOVIE_BASE_URL,
  TV_BASE_URL,
  SEARCH_BASE_URL,
  API_KEY,
} from "../config/tmdb_api_config";

//Note: Reusability was left in order to improve understanding.

//Movie Listing By Category
export function getMovieListByCategory(selectedCategory) {
  const url = MOVIE_BASE_URL + selectedCategory + "/" + "?api_key=" + API_KEY;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
}

//Tv Show Listing By Category
export function getTvShowListByCategory(selectedCategory) {
  const url = TV_BASE_URL + selectedCategory + "/" + "?api_key=" + API_KEY;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
}

//Movie Detail By Id
export function getMovieDetailById(movieId) {
  const url = MOVIE_BASE_URL + movieId + "?api_key=" + API_KEY;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

//Tv Show Detail By Id
export function getShowDetailById(showId) {
  const url = TV_BASE_URL + showId + "?api_key=" + API_KEY;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

//Search By Category & Keyword
export function SearchByCategoryAndKeyword(selectedCategory, query) {
    const url = SEARCH_BASE_URL + selectedCategory + "?api_key=" + API_KEY + "&query=" + query;
  
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      });
  }
