import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';

const endpoint = 'http://localhost:5000/movies';

export const getMovies = () => {
  const moviesRequest = axios.get(endpoint);

  console.log('getMovies Action Creator.request', moviesRequest);

  return {
    type: GET_MOVIES,
    payload: moviesRequest
  };
};
