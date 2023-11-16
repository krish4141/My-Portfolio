import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="CONTACT" text="Let's have a coffee and chat."/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact