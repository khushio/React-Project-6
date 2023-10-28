import"./HeroSectionStyles.css";
import React from 'react'
import IntroImg from"../assests/image_bg.png"
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="hero">  
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" width={1000} height={800} />
        </div>
        <div className="content">
            <p>HI, I'M Khushi Omar</p>
            <h1>REACT FRONT-END DEVELOPER</h1>
        <div >
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className=" btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Herosection