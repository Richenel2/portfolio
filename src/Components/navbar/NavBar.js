import React from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand" href="index.html">KAYRA | DEV</a>
                <button className="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars}/>
                </button>
                <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#header" >Accueil</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#quisuisje">Qui suis je?</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#competences">Competences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#formations">Formations</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#experiences">Experiences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">A propos de moi </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contacts">Contacts</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#autres">Autres</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar
