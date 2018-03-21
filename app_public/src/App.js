import React, { Component } from 'react';
import Content from './components/content';
import Topnav from './components/topnav';
import { connect } from 'react-redux'
import { } from '../src/actions'

class App extends Component {  
  render() {
    return (      
        <div>
          <Topnav/>
          <div className='container-fluid'>
            <Content/>
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