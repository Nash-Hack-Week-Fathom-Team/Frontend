import React, { Component } from 'react';
import SubModule from './SubModule/SubModule';

class SubModules extends Component {
    state = { 
        questions: [
            {id: 1, text: "Who am I?", link: "#who"},
            {id: 2, text: "What matters?", link: "#matters"},
            {id: 3, text: "What's my purpose?", link: "#purpose"},
            {id: 4, text: "What's my plan?", link: "#plan"}
        ]
     }
    render() { 
        return ( 
            <div>
                {this.state.questions.map( question => (
                    <SubModule key={question.id} text={question.text} link={question.text} selected/>
                ))}
            </div>

         );
    }
}
 
export default SubModules;