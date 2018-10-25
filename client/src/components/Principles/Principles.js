import React, { Component } from 'react';
import PrinModules from './prinModules/prinModules';
import { connect } from 'react-redux'

class Principles extends Component {
    render() { 
        return ( 
            <div class="focusMain">
                <h1>{this.props.subModule.text}</h1>
                <p>This is where we will put text that explains this section.</p>
                <PrinModules module={this.props.module} subModule={this.props.subModule}  principles={this.props.principles}/>
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.module_id;
    let title = ownProps.match.params.subModule_id;
    return {
        principles: state.principles,
        subModule: state.subModules.find(subModule => subModule.text.toLowerCase() === title),
        module: state.modules.find(module => module.id === id)   
    }
}

export default connect(mapStateToProps)(Principles);