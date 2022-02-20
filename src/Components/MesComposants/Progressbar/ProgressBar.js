import React from 'react'
import "./Progressbar.css"
import ScrollAnimation from 'react-animate-on-scroll';
function ProgressBar(props) {
    var variable =props.params
    var t=variable["to"]+"%"

    return (
        <div className="progressbar">
            <div className="text">
                <p>{variable["text"]}
                </p>
                <ScrollAnimation className="number" animateIn="animation2" style={{"--num" : variable["to"]}}>  %</ScrollAnimation>
            </div>
            <div className="bar">
                <div style={{width:t}}><ScrollAnimation className="progress" animateIn="animation" duration="1.5s"></ScrollAnimation></div>
            </div>
        </div>
    )
}


export default ProgressBar

