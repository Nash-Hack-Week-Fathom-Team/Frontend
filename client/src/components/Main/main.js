import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Modules from './Modules/Modules';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Profile />
                <Modules />
            </div>
         );
    }
}
 
export default Main;