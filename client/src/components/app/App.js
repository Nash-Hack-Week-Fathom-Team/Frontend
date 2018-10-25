import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import NavBar from '../navBar/navBar'
import DashBoard from '../dashBoard/dashBoard';
import Focus from '../focus/focus';
import Principles from '../principles/principles';

import './app.css';

class App extends Component {

  render () {
    return (
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Route exact path="/" render={(props) => {
                    return (<DashBoard />)
            }} />
            <Route exact path="/module/:module_id" component={Focus}  render={(props) => {
                return <Focus />
            }} />
            <Route exact path="/module/:module_id/:subModule_id" component={Principles} render={(props) => {
                return <Principles />
            }} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;