import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

// redux
import { Provider } from 'react-redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducers, applyMiddleware(ReduxThunk));

window.renderApp = function (window) {
    ReactDOM.render(
        <Provider store={store}><App /></Provider>, 
        document.getElementById('root')
    );
    // registerServiceWorker();
    // unregister();
}
