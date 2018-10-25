import React, { Component } from 'react';
import SubModule from './subModule/subModule';


class SubModules extends Component {
    state = {
        module: this.props.module,
        subModules: this.props.subModules
    }

    render() { 
        return ( 
            <div class="focusWords">
                {this.state.subModules.map( subModules => (
                    <SubModule key={subModules.id} text={subModules.text} link={"/module/".concat(this.state.module.id).concat(subModules.link)} selected/>
                ))}
            </div>

         );
    }
}

export default SubModules;