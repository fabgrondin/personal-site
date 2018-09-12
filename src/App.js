import React, { Component } from 'react';
import ToggleMenu from './ToggleMenu.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleMenu />
        <p id="welcome_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore neque consectetur dolores, quas est? Iusto animi, facilis eveniet cumque voluptatum sunt beatae nobis, minima temporibus, quod, accusantium quas laborum repellat.
        </p>
      </div>
    );
  }
}

export default App;
