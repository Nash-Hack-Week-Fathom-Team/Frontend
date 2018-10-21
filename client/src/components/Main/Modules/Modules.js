import React, { Component } from 'react';
import Module from './Module/Module';
import {Link} from 'react-router-dom';

class Modules extends Component {
    state = {  
        questions: [
            {id: 1, text: "Who am I?", link: "/Focus"},
            {id: 2, text: "What matters?", link: "/Focus"},
            {id: 3, text: "What's my purpose?", link: "/Focus"},
            {id: 4, text: "What's my plan?", link: "/Focus"}
        ]
     }
    render() { 
        return ( 
            <div class="questions">
                {this.state.questions.map( question => (
                    <Module key={question.id} text={question.text} link={question.link} selected/>
                ))}

            </div>

         );
    }
}
 
export default Modules;