import React, { Component } from 'react';
import logo from './logo.png';
import GuestBook from './GuestBook.jsx'
import './App.css';
import { Header } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header as="h1" color="teal" className="app-title"> My Golden Book </Header>
        </header>
        <Header as="h3" className="page-title"> Wassup fellows ? Leave me a message </Header>
        <GuestBook />
      </div>
    );
  }
}

export default App;
