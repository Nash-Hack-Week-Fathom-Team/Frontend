import React, { Component } from 'react';
import Module from '../Module/Module';

class Modules extends Component {
    state = { 
        modules: [
            {id: 1, text: "Who am I?"},
            {id: 2, text: "What matters?"},
            {id: 3, text: "What's my purpose?"},
            {id: 4, text: "What's my plan?"}
        ]
     }
    render() { 
        return ( 
            <div>
                {this.state.Modules.map( Module => (
                    <Module key={Module.id} text={Module.text} selected/>
                ))}
            </div>

         );
    }
}
 
export default Modules;