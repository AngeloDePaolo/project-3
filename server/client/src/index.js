import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from "./App";
import reducers from './reducers';
import registerServiceWorker from "./registerServiceWorker";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store= {store}><App /></Provider>,
    document.querySelector('#root'));

registerServiceWorker();
