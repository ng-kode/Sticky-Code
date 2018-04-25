import React, { Component } from 'react';
import './Stickies.css';
import { connect } from 'react-redux'
import {
    getStickies
} from '../actions'

import Stickie from './Stickie';

class Stickies extends Component {

    componentDidMount() {
        const { $ } = window;

        this.props.getStickies();

        $('.stickies').packery({
            // options
            itemSelector: '.stickie',
            gutter: 8
        });    
    }
    
    render() {
        const { stickies } = this.props;
        return (            
            <div className="stickies">                
                {stickies.map((stickie, i) => 
                    <Stickie key={i} index={i} />
                )}
            </div>            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const { stickies } = state;
    return {
        stickies: stickies.stickies,
        ...ownProps
    }
}

const mapDispatchToProps = {
    getStickies
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickies)
