import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux'
import {
    getStickies
} from '../../actions'

import Stickie from '../stickie';

class Stickies extends Component {

    
    componentDidMount() {
        const { $ } = this.props.window;

        this.props.getStickies(() => {
            console.log(this.props.stickies);
        });

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
    window: state.window,
    stickies: state.stickies.stickies,
    ...ownProps
})

const mapDispatchToProps = {
    getStickies
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickies)
