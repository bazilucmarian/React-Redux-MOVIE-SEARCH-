import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div>
        <nav className="navbar navbar-light bg-dark mb-5">
            <div className="container">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand text-white text-lg brand-text">
                        MovieSeriesInfo
                   </Link>
                </div>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fa fa-imdb fa-5x" id="imdb-logo"/>
                    </li>
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fa fa-tv fa-5x" id="react-logo"/>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}
export default Navbar; 