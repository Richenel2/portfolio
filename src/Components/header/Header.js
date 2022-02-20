import React from 'react'
import "./Header.css"
import Typed from "react-typed"
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter ,  faWhatsapp, faTelegram, faGithub} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
const Header = () => {
    return (<> 
        <div className="header-wrapper" id ="header">       
        <Particles
            className="particles-canvas"
            params={{
                particles:{
                    number:{
                        value:60,
                        density:{
                            enable:true,
                            value_area:500
                        }
                    },
                    shape:{
                        type:"circle",
                        stroke:{
                            width:10,
                            color:"#f9ab00"
                        }
                    },
                    move: {
                        speed: .5
                    }
                }
            }}
        />
            <div className="main-info">
                <h1>Bienvenue Chez <span> KAYRA | DEV</span></h1>
                <Typed
                    className="typed-text"
                    strings={["Designer","Developpeur Web","Developpeur d'application","Developpeur Front-End", "Developpeur Back-End", "Developpeur python"]}
                    typeSpeed={60}
                    backSpeed={120}
                    loop
                />
                <p>Faites confiance à votre partenaire Digital</p> 
                <a href="#" className="btn-offer">Contacts Me </a>
            <div className="brands-link" style={{marginTop : "5rem"}}>
                <a href="https://twitter.com/Rdev65699025" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="mailto:kayradev2@gmail.com" className="icons"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://github.com/Richenel2/" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://t.me/BeastBoy208" className="icons"><FontAwesomeIcon icon={faTelegram} /></a>
                <a href="https://wa.me/237668882497" className="icons"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
            </div>
        </div>
        </>
    )
}

export default Header
