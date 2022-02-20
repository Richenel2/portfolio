import React from 'react'
import "./Formation.css"

function Formation() {
    return (
        <ul className="formations" >
            <div className="list-formation">
                <li className="date">2020 | Jusqu'à aujourd'hui</li>
                <p> Etudiant à <b>L'Ecole Supérieure Internationale de Génie Numérique</b>, dans la filiére Systéme Numérique. </p>
            </div>
            <div className="list-formation">
                <li className="date">2019 | 2021</li>
                <p> Etudiant à <b>L'Ecole Supérieure Internationale de Génie Numérique</b> dans la filiére Systéme Numérique et à <b>L'Ecole Normale Supérieure de Yaounde </b> dans la filiére Mathématique.</p>
            </div>
            <div className="list-formation">
                <li className="date">Juillet 2019</li>
                <p> J'ai eu mon <b>Baccalaureat C </b>, serie Scientifique</p>
            </div>
        </ul>
    )
}

export default Formation
