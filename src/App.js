import React, { Component } from 'react';
import Notes from './components/notes';
import Navbar from './components/navbar';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducers, applyMiddleware())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar/>
          <div className='container-fluid'>
            <Notes/>
          </div>          
        </div>
      </Provider>
    );
  }
}

export default App;
