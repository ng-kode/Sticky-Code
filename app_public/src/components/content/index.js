import React, { Component } from 'react'
import './styles.css'
import Sidenav from '../sidenav';
import Main from '../main';
import { connect } from 'react-redux'
import {  } from '../../actions'

class Content extends Component {
    render() {
        return (
            <div className='row'>
                <Sidenav/>
                <Main/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
