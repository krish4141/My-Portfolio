import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import MovieApp from "../assets/Movie-App.png";
import UserDashboard from "../assets/UserDashboard.png";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
         <h1>Who Am I?</h1>
         <p>I'M Professional and creative ReactJs FrontEnd developer having 2 years of experience in
          developing High quality scalable, flexible UI using Agile methodology. In the current roles, developed Two web applications from scratched,
            reduced time and efforts by building backend using NodeJs, ExpressJs,
             MongoDB, JavaScript. and FrontEnd by using HTML, CSS, JavaScript, ReactJs, Redux Toolkit..</p>
             <Link to="/contact">
              <button className="btn">CONTACT</button>
             </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-top">
            <img src={MovieApp} className="img" alt="true"/>
          </div>
          <div className="img-bottom">
            <img src={UserDashboard} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent