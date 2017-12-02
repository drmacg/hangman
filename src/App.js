import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import Guess from './components/Guess'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hangman</h1>
        </header>
        <div>
        <Game />
        <Guess />
        </div>
      </div>
    );
  }
}

export default App;
