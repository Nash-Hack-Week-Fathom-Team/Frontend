import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, Form, Input  } from 'reactstrap';

class Module extends Component {
    state = { 
        text: this.props.text,
        link: this.props.link
     }

    
    render() { 
        return ( 
            <Card>
            <CardBody>
                <CardTitle className="card-title">
                    <a href={this.state.link} >{this.state.text}</a>
                </CardTitle>
            </CardBody>
            </Card>
         );
    }
}
 
export default Module;