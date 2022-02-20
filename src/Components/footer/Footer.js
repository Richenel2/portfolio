
import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter ,  faWhatsapp, faTelegram, faGithub} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
const Footer = () => {
    return (
        <footer className="page-footer font-small bg-dark pt-4" id = "footer">
            <div className="context">
                <div className="aboutMe">
                    <h4><span>Ab</span>out Me :</h4>
                    <p>Ut elit officia exercitation nisi est do sint eiusmod ex consectetur. Qui aliqua tempor amet enim voluptate mollit pariatur fugiat exercitation aute officia nisi. Eiusmod ad proident est in deserunt irure qui consectetur commodo. Sit tempor consectetur labore deserunt quis. Duis Lorem pariatur aute elit enim proident aliquip in ad deserunt sunt fugiat ullamco.</p>
                </div>
                <div className="aboutMe">
                    <h4><span>Se</span>rvices :</h4>
                    <p>Ut elit officia exercitation nisi est do sint eiusmod ex consectetur. Qui aliqua tempor amet enim voluptate mollit pariatur fugiat exercitation aute officia nisi. Eiusmod ad proident est in deserunt irure qui consectetur commodo. Sit tempor consectetur labore deserunt quis. Duis Lorem pariatur aute elit enim proident aliquip in ad deserunt sunt fugiat ullamco.</p>
                </div>
                <div className="aboutMe">
                    <h4><span>Co</span>ntacts Me :</h4>
                    <p>Ut elit officia exercitation nisi est do sint eiusmod ex consectetur. Qui aliqua tempor amet enim voluptate mollit pariatur fugiat exercitation aute officia nisi. Eiusmod ad proident est in deserunt irure qui consectetur commodo. Sit tempor consectetur labore deserunt quis. Duis Lorem pariatur aute elit enim proident aliquip in ad deserunt sunt fugiat ullamco.</p>
                </div>
            </div>
            <div className="brands-link" id = "link">
                <a href="https://twitter.com/Rdev65699025" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="mailto:kayradev2@gmail.com" className="icons"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://github.com/Richenel2/" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://t.me/BeastBoy208" className="icons"><FontAwesomeIcon icon={faTelegram} /></a>
                <a href="https://wa.me/237668882497" className="icons"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
            <div className="copyright">
                <p> Copyright @2021: <span>KAYRA | DEV</span></p>
            </div>
        </footer>
    )
}

export default Footer
