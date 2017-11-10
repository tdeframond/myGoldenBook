import React, { Component } from 'react';
import logo from './logo.svg';
import GuestBook from './GuestBook.jsx'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my life</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          C'est énormme ce qui se passe ici !! j'ai enfin installé ce truc de bolosse
        </p>
        <GuestBook />
      </div>
    );
  }
}

export default App;
