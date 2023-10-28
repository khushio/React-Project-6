import { Link } from "react-router-dom";
import"./AboutContentstyles.css";
import React from 'react';
import image1 from "../assests/IMAGE1.png"
import image2 from "../assests/IMAGE.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>
                I'm a react front-end developer who is keen to learn and explore new things and more... I create responsive secure websites .
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={image2} className="img" alt="true"></img>

                </div>
                <div className="img-stack bottom">
                <img src={image1} className="img" alt="true"></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent