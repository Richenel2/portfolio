import React from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

            <div className="container-fluid">
                <a className="navbar-brand" href="#">KAYRA | DEV</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars}/>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">about me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">how work</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacts</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </div>
        </nav>
    )
};

export default NavBar
