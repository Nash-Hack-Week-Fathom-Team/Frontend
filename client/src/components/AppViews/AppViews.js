import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Main from '../Main/main';
import Focus from '../Focus/Focus';
 
class AppViews extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return (<Main /> )
                }} />
                <Route exact path="/Focus" render={(props) => {
                    return <Focus />
                }} />
            </React.Fragment>
        )
    }
}

export default AppViews;