import "./ProjectCardStyle.css";
// import MovieApp from "../assets/Movie-App.png";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./WorkCardData";
import React from 'react'
// import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container"> 
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
      {ProjectCardData.map((item,index) => {
        return (
          <ProjectCard
          key={index}
          imgsrc={item.imgsrc}
          title={item.title}
          text={item.text}
          view={item.view}
          source={item.source}
          />
        );
      })}
      </div>
    </div>
  )
}

export default Work;
