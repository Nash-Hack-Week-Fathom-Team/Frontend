import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Main from '../Main/main';
import Test from '../test/test'
 
class AppViews extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return (<Main /> )
                }} />
                <Route exact path="/Test" render={(props) => {
                    return <Test />
                }} />
            </React.Fragment>
        )
    }
}

export default AppViews;