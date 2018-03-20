import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux'
import {  } from '../../actions'

import Note from '../note';

class Notes extends Component {
    
    render() {
        const packeryOps = `{
            "itemSelector": ".note",
            "gutter": 10
        }`

        return (
            <div className="notes" data-packery={packeryOps} ref={el => this.el = el}>
                {[1,2,3,4,5,6].map(note => <Note key={note} />)}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
