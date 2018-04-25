import React, { Component } from 'react';
import Body from './components/Body';
import Topnav from './components/Topnav';
import { connect } from 'react-redux'
import { } from '../src/actions'

class App extends Component {  
  render() {
    return (      
        <div>
          <Topnav/>
          <div className='container-fluid'>
            <Body/>
          </div>          
        </div>      
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state, ...ownProps
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)