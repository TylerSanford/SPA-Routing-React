import React, { Component } from 'react';
import '../App.css';

import { Route } from 'react-router-dom';

import MoviesDetails from './MoviesDetails';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const movies = this.props.getMovies();
  }

  render() {
    return (
      <div className="Movies">
        <h1>Movies</h1>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
              <li key={i}>
                <NavLink
                  activeClassName="nav-link--active"
                  to={`/movies/${movie.id}`}
                >
                  {movie.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(Movies);
