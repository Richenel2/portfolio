import React from 'react'
import DescSkill from '../MesComposants/DescSkill/DescSkill'
import "./Skill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase,faBezierCurve, faDraftingCompass, faDesktop, faMobile, faListAlt } from "@fortawesome/free-solid-svg-icons"
import { faCodepen } from '@fortawesome/free-brands-svg-icons'

function Skill() {
    return (<>
            <p> 
                En gros voici mes competences
            </p>
        <div className="block-skill">
            
            <DescSkill
                params={{
                    title: "Developpement Back-end",
                    icon: <FontAwesomeIcon icon={faDatabase}/>,
                    skill : ["django","expressjs"]
                }}
            />
            <DescSkill
            params={{
                title: "Developpement front-end",
                icon: <FontAwesomeIcon icon={faDraftingCompass}/>,
                skill : ["react js","vue","sass"]
            }}
            />
            <DescSkill
            params={{
                title: "Developpement Mobile",
                icon: <FontAwesomeIcon icon={faMobile}/>,
                skill : ["react-native","Flutter"]
            }}
            />
            <DescSkill
            params={{
                title: "Developpement Logiciel",
                icon: <FontAwesomeIcon icon={faDesktop}/>,
                skill : ["java", "python"]
            }}
            />
            <DescSkill
            params={{
                title: "Design",
                icon: <FontAwesomeIcon icon={faBezierCurve}/>,
                skill : ["photoshop", "illustrator", "adobe xd"]
            }}
            />
            <DescSkill
            params={{
                title: "Maitrise les Api",
                icon:<FontAwesomeIcon icon={faCodepen}/>,
                skill : ["twilio","houtsuite","google assistant"]
            }}
            />
            <DescSkill
            params={{
                title: "autres",
                icon: <FontAwesomeIcon icon={faListAlt}/>,
                skill : ["opencv","flask"]
            }}
            />
        </div>
        </>
    )
}

export default Skill
