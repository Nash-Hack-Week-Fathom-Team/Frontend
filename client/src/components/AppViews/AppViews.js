import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Main from '../Main/main';
import Focus from '../Focus/Focus';
import Principles from '../Principles/Principles';

class AppViews extends Component {
    state = {
        focus: []
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return (<Main />)
                }} />
                <Route exact path="/Focus" render={(props) => {
                    return <Focus />
                }} />
                <Route exact path="/Principles" render={(props) => {
                    return <Principles />
                }} />
            </React.Fragment>
        )
    }
}

export default AppViews;