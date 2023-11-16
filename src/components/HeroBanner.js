import "./HeroBannerStyle.css";
import WebDev from "../assets/frontendDev.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={WebDev} alt="WebDev" />
        </div>
        <div className="content">
          <p>Hi, I'M Krishna Bhashinge</p>
          <h1> ReactJs Frontend Developer.</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner