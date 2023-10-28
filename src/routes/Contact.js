import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroProject from '../Components/HeroProject';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
    <div>
        <Navbar/>

        <HeroProject heading="CONTACT." text="Let's have a chat"/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact