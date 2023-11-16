import "./FooterStyle.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Sant Tukaram Nagar,Pimpri-Pune.</p>
              <p>Maharashtra, India.</p>
            </div>
          </div>
          <div className="phoneNumber">
          <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            +91-7972433771</h4>
          </div>

          <div className="email">
          <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            kvbhashinge@gmail.com</h4>
          </div>

        </div>

        <div className="right">
          <h4>About me</h4>
          <p>This is me Krishna Bhashinge, Software Engineer at Mphasis. I enjoy discussing new Projects,Challenges and Opportunities</p>
           <div className="socialMedia">
           <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          <a href="https://instagram.com/krish.b3513?igshid=MzNINGNkZWQ4Mg=="> <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
           <a href="https://www.linkedin.com/in/krishna-bhashinge-5b4957178"> <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} /> </a>
           <a href="https://github.com/krish4141/"><FaGithub size={30}  style={{ color: "#fff", marginRight: "1rem" }}/></a>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer