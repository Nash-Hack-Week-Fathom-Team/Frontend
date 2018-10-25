import React, { Component } from 'react';
import Module from './module/module';
import { connect } from 'react-redux'
 
class Modules extends Component {
    render() { 
        return ( 
            <div class="questions">
                {this.props.modules.map( modules => (
                    <Module key={modules.id} text={modules.text} link={"module/".concat(modules.id)} selected/>
                ))}
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        modules: state.modules
    }
}
 
export default connect(mapStateToProps)(Modules);