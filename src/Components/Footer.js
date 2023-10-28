import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                      <p> 123 Housing Society.</p>
                      <p>Uttar Pradesh.</p>
                      </div>
                     
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                  123-456-789</h4>

                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} /> 
                  info@gmail.com</h4>

                </div>

            </div>
            <div className="right">
              <h4>
             About Myself
              </h4>
              <p> This is Khushi Omar , Btech 3rd Year Student of Vit Velore .I enjoy discussing new Projects and design challenges</p>
              <div className="social">
              <FaFacebook size={40} style={{color:"#fff", marginRight:"2rem"}} />
              <FaTwitter size={40} style={{color:"#fff", marginRight:"2rem"}} />
              <FaLinkedin size={40} style={{color:"#fff", marginRight:"2rem"}} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer