import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import SelectedMovieReducer from './SelectedMovieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: SelectedMovieReducer
});

export default rootReducer;
