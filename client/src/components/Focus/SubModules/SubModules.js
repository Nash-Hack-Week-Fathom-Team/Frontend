import React, { Component } from 'react';
import SubModule from './SubModule/SubModule';

class SubModules extends Component {
    state = { 
        focus: [
            {id: 1, text: "Identity", link: "/Principles"},
            {id: 2, text: "Capital", link: "/Principles"},
            {id: 3, text: "Passion", link: "/Principles"},
            {id: 4, text: "Best Life", link: "/Principles"},
            {id: 5, text: "Smart Goals", link: "/Principles"}
        ]
     }
    render() { 
        return ( 
            <div class="focusWords">
                {this.state.focus.map( focus => (
                    <SubModule key={focus.id} text={focus.text} link={focus.link} selected/>
                ))}
            </div>

         );
    }
}
 
export default SubModules;