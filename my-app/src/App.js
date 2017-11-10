import React, { Component } from 'react';
import logo from './logo.png';
import GuestBook from './GuestBook.jsx'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Golden Book</h1>
        </header>
        <p className="App-intro">
          Bonjour les kassos, écrivez vos ptits messages ici.
        </p>
        <GuestBook />
      </div>
    );
  }
}

export default App;
