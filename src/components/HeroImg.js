import "./HeroImgStyle.css";
import React from 'react'

const HeroImg = (props) => {
  return (
    <div className="hero-img">
        <div className="heading">
           {/* <img src={frontDev} alt="frontDev" /> */}
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImg