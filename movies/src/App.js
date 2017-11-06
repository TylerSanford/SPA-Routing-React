import React, { Component } from 'react';

import MoviesContainer from './components/MoviesContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
