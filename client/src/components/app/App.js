import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './../../store';
import AppViews from '../AppViews/AppViews';
import NavBar from '../NavBar/NavBar'

class App extends Component {
  render () {
    return (
      <div className="AppViews">
        <div>
            <NavBar />
            <AppViews />
        </div>
      </div>
    );
  }
}

export default App;