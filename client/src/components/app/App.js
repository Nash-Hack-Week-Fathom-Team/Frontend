import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './../../store';
import Body from './../Body/Body';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <button className="btn btn-info">Bootstrap?!</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          <Body/>
        </body>
      </div>
    );
  }
}

export default App;
