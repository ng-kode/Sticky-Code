import React, { Component } from 'react';
import './styles.css'
import { connect } from 'react-redux'
import {  } from '../../actions'

class Note extends Component {
    render() {
        return (
            <div className="card note">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
