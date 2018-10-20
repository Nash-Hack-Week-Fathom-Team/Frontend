import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, Form, Input  } from 'reactstrap';

class Module extends Component {
    state = { 
        text: this.props.text
     }

    
    render() { 
        return ( 
            <Card>
            <CardBody>
                <CardTitle className="card-title">
                    <p>{this.state.text}</p>
                </CardTitle>
            </CardBody>
            </Card>
         );
    }
}
 
export default Module;