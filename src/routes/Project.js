import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import HeroProject from '../Components/HeroProject'
import Pricingcard from '../Components/Pricingcard'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
   <Navbar/>
   <HeroProject heading="PROJECTS." text="Here is some of my work"></HeroProject>
   <Work/>
   <Pricingcard/>
   <Footer/>
   </div>
  )
}

export default Project