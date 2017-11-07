import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';

export const getMovies = () => {
  const moviesRequest = axios.get('http://localhost:5000/movies');

  return {
    type: GET_MOVIES,
    payload: moviesRequest
  };
};

export const setSelectedMovie = id => {
  const moviesRequest = axios.get('http://localhost:5000/movies/${id}');

  return {
    type: SET_SELECTED_MOVIE,
    payload: moviesRequest
  };
};
