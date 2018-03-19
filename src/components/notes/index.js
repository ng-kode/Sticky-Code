import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import {  } from '../../actions'

class Notes extends Component {
    render() {
        return (
            <div className='row'>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className='sidebar-sticky'>
                        <ul className='nav flex-column'>
                            {[1,2,3,4,5,6].map(li => <li key={li} className='nav-item'><a className='nav-link' href='#'>Link</a></li>)}
                        </ul>

                        <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
                            <span>Saved Reports</span>
                            <a className='d-flex align-items-center text-muted' href='#'>
                                <i className="fas fa-plus"></i>
                            </a>
                        </h6>
                        <ul className='nav flex-column mb-2'>
                            {[1,2,3,4].map(li => <li key={li} className='nav-item'><a className='nav-link' href='#'>Link</a></li>)}
                        </ul>
                    </div>
                </nav>
                <main role='main' className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'>
                    <h2>Our Sticky codes will be here</h2>
                </main>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
