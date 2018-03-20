import React, { Component } from 'react';
import Content from './components/content';
import Topnav from './components/topnav';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducers, applyMiddleware())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Topnav/>
          <div className='container-fluid'>
            <Content/>
          </div>          
        </div>
      </Provider>
    );
  }
}

export default App;
