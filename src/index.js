import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers';
import * as serviceWorker from './serviceWorker';
// I decided to use react router dom so that page navigation was easier.
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// Redux was sort of neccessary, because most of the information I had needed to go across many components
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
