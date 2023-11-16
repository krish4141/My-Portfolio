import React from 'react';
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Routes, Route } from 'react-router-dom';
 

function App() {
  return (
   <>
   <Routes>
     <Route path= "/" element={<Home/>}/>
     <Route exact path= "/about" element={<About/>}/>
     <Route exact path= "/contact" element={<Contact/>}/>
     <Route exact path= "/project" element={<Project/>}/>
   </Routes>
   </>
  );
}

export default App;
