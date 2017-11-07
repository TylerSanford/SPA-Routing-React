import React, { Component } from 'react';

import Movies from './components/Movies';
import MoviesDetails from './components/Movies';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

export default App;
