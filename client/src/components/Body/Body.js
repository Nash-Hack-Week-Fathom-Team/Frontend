import React, { Component } from 'react';
import Profile from './../Profile/Profile';
import Modules from '../Modules/Modules';



class Body extends Component {
    state = {  }
    render() { 
        return (
            <frameElement>
                <Profile/>
                <Modules/>
            </frameElement>  
            
        );
    }
}
 
export default Body;