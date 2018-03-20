import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux'
import {  } from '../../actions'

import Note from '../note';

class Notes extends Component {

    
    componentDidMount() {
        const { $ } = this.props.window;
        $('.notes').packery({
            // options
            itemSelector: '.note',
            gutter: 10
        });    
    }
    
    render() {
        return (
            <div className="notes" ref={el => this.el = el}>
                {[1,2,3,4,5,6].map(note => <Note key={note} />)}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    ...state, ...ownProps
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
