import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
// import ProjectCard from '../components/ProjectCard'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS" text="Some of my projects which i have developed by using ReactJs,Redux-Toolkit,JavaScript,Bootstrap,Figma,HTML,CSS."/>
      <Work/>
      <Footer />
      
    </div>
  )
}

export default Project