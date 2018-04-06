import React, { Component } from 'react';
import './styles.css'
import { connect } from 'react-redux'
import {  } from '../../actions'

class Stickie extends Component {

    createDivAce = () => {
        const { stickie, $, ace } = this.props;

        this._stickieEditor = ace.edit(this._stickie);
        this._stickieEditor.setValue(stickie.code);
        this._stickieEditor.setOptions({
            readOnly: true,
            highlightActiveLine: false,
            showGutter: false,
            wrapBehavioursEnabled: true
        })
        this._stickieEditor.clearSelection(1);
        this._stickieEditor.setTheme("ace/theme/solarized_light");
        this._stickieEditor.session.setMode(`ace/mode/${stickie.language}`);
        this._stickieEditor.container.style.pointerEvents="none"

        $(this._stickie).append('<div class="border-ph-right"></div>')
        $(this._stickie).append('<div class="border-ph-bottom"></div>')
    }
    
    
    componentDidMount() {
        this.createDivAce()
    }
    

    render() {
        return (
            <div>
                <div className="stickie" ref={component => this._stickie = component}></div>
            </div>            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const { stickies, window } = state;
    const stickie = stickies.stickies[ownProps.index]
    const { $, ace } = window;
    return {
        $,
        ace,
        stickie,
        ...ownProps
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickie)
