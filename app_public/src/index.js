import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

let store = createStore(reducers)
let preloadedState = { ...store.getState() }

window.renderApp = function (window) {
    preloadedState.window = window
    store = createStore(reducers, preloadedState, applyMiddleware(ReduxThunk))

    ReactDOM.render(
        <Provider store={store}><App /></Provider>, 
        document.getElementById('root')
    );
    // registerServiceWorker();
    // unregister();
}
