import React from 'react';
import ReactDOM from "react-dom"

import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reduces/rootReducer"

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
