import React, { Component } from 'react';
import logo from './logo.png';
import GuestBook from './GuestBook.jsx'
import './App.css';
import { Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topics}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


class App extends Component {

  render() {
    return (

      <Router>
        <div>
          

          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Header as="h1" color="teal" className="app-title"> My Golden Book </Header>
              </header>
              <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/topics">Topics</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={GuestBook}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
              </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;

