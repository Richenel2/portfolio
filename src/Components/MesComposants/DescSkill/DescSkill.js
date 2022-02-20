import React from 'react'
import FadeInWhenVisible from '../Fade/FadeInWhenVisible'
import "./DescSkill.css"




function DescSkill(props) {
    const params=props.params
    let contents= []
    for (let i in params["skill"]){
        let img = params["skill"][i]
        contents.push( <div className="brands-skill" >
                    <div><img src={process.env.PUBLIC_URL + "/ressources/"+img+".png"} width="50px"/></div>
                    <div>{img}</div>
                </div>)
    }
    return (
        <FadeInWhenVisible >
            <div className="desc-skill">
                <div className="skill-header">
                    <div className="skill">
                        {params.icon}
                    </div>
                    <p className="skill-title">{params["title"]}</p>
                </div>
                <div className="skilll">
                    {contents}
                </div>
            </div>
        </FadeInWhenVisible>
    )
}

export default DescSkill
