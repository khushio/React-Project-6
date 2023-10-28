import "./ContactFormStyles.css";
import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <label >Name</label>
            <input type="text" placeholder="Your Name"/>
            <label>E-Mail</label>
            <input type="email" placeholder="example@gmail.com"/>
            <label>Subject</label>
            <input type="text" placeholder="Type your Query"></input>
            <label>Message</label>
            <textarea rows={6} placeholder="Type your message..."/>
            <button className="btn"> Submit</button>
        </form>
    </div>
  )
}

export default ContactForm