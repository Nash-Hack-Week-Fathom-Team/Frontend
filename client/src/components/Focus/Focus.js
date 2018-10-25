import React, { Component } from 'react';
import SubModules from './subModules/subModules';
import { connect } from 'react-redux'

class Focus extends Component {
    render() { 
        return ( 
            <div class="focusMain">
                <h1>{this.props.module.text}</h1>
                <p>This is where we will put text that explains this section.</p>
                {/* <About /> */}
                <SubModules module={this.props.module} subModules={this.props.subModules}/>
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.module_id;
    return {
        subModules: state.subModules,
        module: state.modules.find(module => module.id === id)
    }
}
 
export default connect(mapStateToProps)(Focus);