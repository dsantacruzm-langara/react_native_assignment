import {
  MOVIE_BASE_URL,
  TV_BASE_URL,
  API_KEY,
} from "../config/tmdb_api_config";

//Movie Listing By Category
export function getMovieListByCategory(selectedCategory) {
  const url = MOVIE_BASE_URL + selectedCategory + "/" + "?api_key=" + API_KEY;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
}

//Movie Listing By Category
export function getTvShowListByCategory(selectedCategory) {
  const url = TV_BASE_URL + selectedCategory + "/" + "?api_key=" + API_KEY;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
}
