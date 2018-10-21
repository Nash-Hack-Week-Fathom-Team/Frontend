import React, { Component } from 'react';
import PrinModule from './PrinModule/PrinModule';

class PrinModules extends Component {
    state = { 
        principles: [
            {id: 1, text: "WATCH", link: "#watch"},
            {id: 2, text: "READ", link: "#read"},
            {id: 3, text: "DO", link: "#do"},

        ]
     }
    render() { 
        return ( 
            <div class="focusWords">
                {this.state.principles.map( principles => (
                    <PrinModule key={principles.id} text={principles.text} link={principles.text} selected/>
                ))}
            </div>

         );
    }
}
 
export default PrinModules;