import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import HeroImg from '../components/HeroImg'

const About = () => {
  return (
    <div>
      <Navbar />
      
      <HeroImg heading="ABOUT" text="I'M ReactJs FrontEnd Developer." />
             <AboutContent />
       <Footer />
    </div>

    
  )
}

export default About