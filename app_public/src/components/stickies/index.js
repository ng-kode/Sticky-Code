import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux'
import {  } from '../../actions'

import Stickie from '../stickie';

class Stickies extends Component {

    
    componentDidMount() {
        const { $ } = this.props.window;
        $('.stickies').packery({
            // options
            itemSelector: '.stickie',
            gutter: 10
        });    
    }
    
    render() {
        return (
            <div className="stickies" ref={el => this.el = el}>
                {[1,2,3,4,5,6].map(stickie => <Stickie key={stickie} />)}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    ...state, ...ownProps
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickies)
