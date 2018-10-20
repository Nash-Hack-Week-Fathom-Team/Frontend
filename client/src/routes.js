import React, { Component } from 'react';
import { BrowserRouter as Route} from 'react-router-dom';

import App from './components/app/App';

class Routes extends Component {
    state = {  }
    render() { 
        return (    
            <Route exact path="/" component={App}>
                <App />
            </Route> 
        );
    }
}
 
export default Routes;