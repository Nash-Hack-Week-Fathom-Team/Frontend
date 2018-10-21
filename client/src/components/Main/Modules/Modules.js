import React, { Component } from 'react';
import Module from './Module/Module';

class Modules extends Component {
    state = { 
        questions: [
            {id: 1, text: "Who am I?", link: "#"},
            {id: 2, text: "What matters?", link: "#matters"},
            {id: 3, text: "What's my purpose?", link: "#purpose"},
            {id: 4, text: "What's my plan?", link: "#plan"}
        ]
     }
    render() { 
        return ( 
            <div class="questions">
                {this.state.questions.map( question => (
                    <Module key={question.id} text={question.text} link={question.text} selected/>
                ))}
            </div>

         );
    }
}
 
export default Modules;