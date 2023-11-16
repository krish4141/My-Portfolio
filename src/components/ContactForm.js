import React from 'react'
import "./ContactFormStyle.css";

const ContactForm = () => {
  return (
    <div className='form'>
      <form action="">
        <label>Your Name</label>
        <input type='text' placeholder='Your Name' />
        <label>Email</label>
        <input type='email' placeholder='Email Id' />
        <label>Subject</label>
        <input type='text' placeholder='Your Name' />
        <label>Message</label>
        <textarea rows="6" placeholder='Type Your Message Here' />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
