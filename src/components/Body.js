import React, { Component } from 'react'
import './Body.css'
import Sidenav from './Sidenav';
import Stickies from './Stickies';
import { connect } from 'react-redux'
import {  } from '../actions'

class Content extends Component {    
    render() {
        return (
            <div className='row'>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <Sidenav/>
                </nav>
                <main role='main' className='ml-md-auto col-md-10 col-sm-12 pt-3 pr-4'>
                    <Stickies/>
                </main>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
