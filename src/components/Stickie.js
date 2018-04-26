import React, { Component } from 'react';
import './Stickie.css';
import { connect } from 'react-redux'
import {  } from '../actions'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Stickie extends Component {

    createDivAce = () => {
        const { stickie } = this.props;
        const { ace } = window;

        this._stickieEditor = ace.edit(this._stickie);
        this._stickieEditor.setValue(stickie.code);
        this._stickieEditor.setOptions({
            readOnly: true,
            highlightActiveLine: false,
            showGutter: false,
            wrapBehavioursEnabled: true
        })
        this._stickieEditor.clearSelection(1);
        this._stickieEditor.setTheme("ace/theme/monokai");
        this._stickieEditor.session.setMode(`ace/mode/${stickie.language.toLowerCase()}`);
        this._stickieEditor.container.style.pointerEvents="none"

        // $(this._stickie).append('<div class="border-ph-right"></div>')
        // $(this._stickie).append('<div class="border-ph-bottom"></div>')
    }
    
    
    componentDidMount() {
        // this.createDivAce()
    }
    

    render() {
        //<div className="stickie" ref={component => this._stickie = component}></div>
        const {
            language,
            code
        } = this.props.stickie;

        const {
            index,
            stickieWidth,
        } = this.props;
                
        return (
            <AceEditor
                className={`stickie col-md-${stickieWidth}`}
                height='250px'
                name={index.toString()}
                mode={language.toLowerCase()}
                value={code}
                theme="monokai"
                onChange={() => {}}                
                editorProps={{$blockScrolling: true}}
                showGutter={false}
                wrapEnabled={true}
                readOnly={true}
            />            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const { stickies } = state;
    const stickie = stickies.stickies[ownProps.index]
    return {
        stickie,
        ...ownProps
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Stickie)
