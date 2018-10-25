import React, { Component } from 'react';
import Profile from '../profile/profile';
import Modules from './modules/modules';

class DashBoard extends Component {
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
 
export default DashBoard;