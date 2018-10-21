import React, { Component } from 'react';
import SubModule from './SubModule/SubModule';

class SubModules extends Component {
    state = { 
        focus: [
            {id: 1, text: "Identity", link: "#identity"},
            {id: 2, text: "Capital", link: "#capital"},
            {id: 3, text: "Passion", link: "#passion"},
            {id: 4, text: "Best Life", link: "#bestlife"},
            {id: 5, text: "Smart Goals", link: "#smartgoals"}
        ]
     }
    render() { 
        return ( 
            <div class="focusWords">
                {this.state.focus.map( focus => (
                    <SubModule key={focus.id} text={focus.text} link={focus.text} selected/>
                ))}
            </div>

         );
    }
}
 
export default SubModules;