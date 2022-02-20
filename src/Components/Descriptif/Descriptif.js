import React from 'react'
import "./Descriptif.css"

function Descriptif() {
    return (
        <p className="descrip">
            Hey, je suis <span className="brands-name">Kayra-Dev</span>, <span className="option-skill">développeur fullstack</span> et <span className="option-skill">Designer</span>. <br />
            En tant que developpeur fullstack, je vous offre les services suivant :
            <ul>
                <li>Developpement de site web</li>
                <li>Developpement d'application mobile</li>
                <li>Developpement d'api</li>
                <li>Developpement de logiciel</li>
            </ul>
            Et dans le domaine du design
            <ul>
                <li>conception d'identité visuelle (Logo + Mock-up + charte graphique)</li>
                <li>Flyers</li>
                <li>Carte de visite</li>
                <li>Panneau publicitaire et autre</li>
            </ul>
        </p>
    )
}

export default Descriptif
