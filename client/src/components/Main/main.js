import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Modules from './Modules/Modules';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="content-container">
                <Profile />
                <Modules />
            </div>
            </div>
         );
    }
}
 
export default Main;