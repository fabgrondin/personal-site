import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ToggleMenu from './ToggleMenu.js'

import logo from './logo.svg';
import './App.css';

const Welcome = () => (
  <h1>Bienvenue</h1>
)

const Resume = () => (
  <h1>Mon CV</h1>
)

const Portfolio = () => (
  <h1>Mon portfolio</h1>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ToggleMenu />

          <Route exact path="/" component={Welcome} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
