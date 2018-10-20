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
        <body>
          <Body/>
        </body>
      </div>
    );
  }
}

export default App;
