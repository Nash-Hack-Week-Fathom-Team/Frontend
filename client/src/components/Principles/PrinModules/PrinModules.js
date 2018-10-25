import React, { Component } from 'react';
import PrinModule from './prinModule/prinModule';

class PrinModules extends Component {
    state = {
        module: this.props.module,
        subModule: this.props.subModule,
        principles: this.props.principles
    }

    render() { 
        return ( 
            <div class="focusWords">
                {this.state.principles.map( principles => (
                    <PrinModule key={principles.id} text={principles.text} link={"/module/".concat(this.state.module.id).concat(this.state.subModule.link).concat(principles.link)} selected/>
                ))}
            </div>

         );
    }
}
 
export default PrinModules;