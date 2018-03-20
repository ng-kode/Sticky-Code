import React, { Component } from 'react';
import './styles.css'
import { connect } from 'react-redux'
import {  } from '../../actions'

import Notes from '../notes'

class Main extends Component {
    render() {
        return (
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'>
                <h2>Our Sticky codes will be here</h2>
                <Notes/>
            </main>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    ...state, ...ownProps    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
