import React from 'react'
import Navbar from '../Components/Navbar'
import HeroProject from '../Components/HeroProject'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroProject heading="ABOUT." text="A beginner-friendly in Front-End Developer."/>
        <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About