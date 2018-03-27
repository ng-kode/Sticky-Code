import React, { Component } from 'react';
import './styles.css'
import { connect } from 'react-redux'
import {  } from '../../actions'

class Stickie extends Component {

    createDivAce = () => {
        const { $, ace } = this.props.window        
        this._stickieEditor = ace.edit(this._stickie)
        this._stickieEditor.setValue(`
this._stickieEditor.setOptions({
    readOnly: true,
    highlightActiveLine: false,
    showGutter: false  
})
this._stickieEditor.clearSelection(1);
this._stickieEditor.setTheme("ace/theme/solarized_light");
this._stickieEditor.session.setMode('ace/mode/text');
this._stickieEditor.container.style.pointerEvents="none"
        `);
        this._stickieEditor.setOptions({
            readOnly: true,
            highlightActiveLine: false,
            showGutter: false,
            wrapBehavioursEnabled: true
        })
        this._stickieEditor.clearSelection(1);
        this._stickieEditor.setTheme("ace/theme/solarized_light");
        this._stickieEditor.session.setMode(`ace/mode/text`);
        this._stickieEditor.container.style.pointerEvents="none"

        $(this._stickie).append('<div class="border-ph-right"></div>')
        $(this._stickie).append('<div class="border-ph-bottom"></div>')
    }
    
    
    componentDidMount() {
        this.createDivAce()
    }
    

    render() {
        return (
            <div className="stickie" ref={component => this._stickie = component}>                
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    ...state, ...ownProps
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickie)
