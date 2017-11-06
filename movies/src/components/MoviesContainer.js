import React from 'react';
import { connect } from 'react-redux';

import { getMovies } from '../actions';

import Movies from './Movies';

const MoviesContainer = () => {
  return <Movies />;
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(Movies);
