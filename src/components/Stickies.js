import React, { Component } from 'react';
import './Stickies.css';
import { connect } from 'react-redux'
import {
    getStickies
} from '../actions'

import Stickie from './Stickie';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

class Stickies extends Component {

    componentDidMount() {
        const { $ } = window;

        this.props.getStickies();

        $('.stickies').packery({
            // options
            itemSelector: '.stickie',
            gutter: 10
        });    
    }
    
    render() {
        const { stickies } = this.props;
        
        let counter = 0;
        let stickieWidthArr = []
        for (let i = 0; i < stickies.length; i++) {
            if (i === 0) {
                stickieWidthArr.push(getRandomIntInclusive(3, 9));                
            } else {
                if (stickieWidthArr[i - 2]) {
                    // check prev prev one
                    stickieWidthArr[i - 2] < 6
                        ? stickieWidthArr.push(getRandomIntInclusive(6, 9))
                        : stickieWidthArr.push(getRandomIntInclusive(3, 5));
                } else {
                    // check if the prev one
                    stickieWidthArr[i - 1] < 6
                        ? stickieWidthArr.push(getRandomIntInclusive(6, 9))
                        : stickieWidthArr.push(getRandomIntInclusive(3, 5));
                }
            }
            // console.log(stickieWidthArr);                        
        }
        return (            
            <div className="stickies">                
                {stickies.map((stickie, i) => {                       
                        return (<Stickie key={i} index={i} stickieWidth={stickieWidthArr[i]} />);
                    }
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
