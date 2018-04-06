import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux'
import {
    getStickies
} from '../../actions'

import Stickie from '../stickie';

class Stickies extends Component {

    componentDidMount() {
        const { $ } = this.props;

        this.props.getStickies();

        $('.stickies').packery({
            // options
            itemSelector: '.stickie',
            gutter: 10
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
    const { window, stickies } = state;
    return {
        $: window.$,
        stickies: stickies.stickies,
        ...ownProps
    }
}

const mapDispatchToProps = {
    getStickies
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickies)
