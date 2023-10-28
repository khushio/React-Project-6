import React from 'react';
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter basename='/React-Project-6'>
  <Routes >
    
    <Route exact path="/React-Project-6/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project" element={<Project/>}/>
    </Routes> 
    </ BrowserRouter>
  
  
  );
}

export default App;
