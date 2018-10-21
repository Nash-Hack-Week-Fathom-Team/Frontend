import React, { Component } from 'react';
import SubModules from './SubModules/SubModules';

class Focus extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="focusMain">
                <h1>Who am I?</h1>
                <p>This is where we will put text that explains this section.</p>
                {/* <About /> */}
                <SubModules />
            </div>
         );
    }
}
 
export default Focus;