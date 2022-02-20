import React from 'react'
import "./Header.css"
import Typed from "react-typed"
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>KAYRA | DEV</h1>
                <Typed
                    className="typed-text"
                    strings={["UI/UX Design","Web Design","Front-End Developer","Back-End Developer", "Python Developer", "Electronic Engineer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-offer">Contacts Me </a>
            </div>
        </div>
    )
}

export default Header
