import React, { Component } from 'react';
import '../App.css';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const movies = this.props.getMovies();

    this.setState({
      movies
    });
  }

  render() {
    return (
      <div className="Movies">
        <h1>Movies</h1>
        <ul>
          {this.props.movies.map((movie, i) => {
            return (
              <h1>{movie.title}</h1>
              Director: {movie.director}
              Meta Score: {movie.metaScore}
              Stars: {movie.stars}
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Movies;
