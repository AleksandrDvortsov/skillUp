import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './system/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
