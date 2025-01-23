import Hero from '@/sections/contactus/Hero'
import Contact from '@/sections/contactus/Contact'
import React from 'react'
import Navbar from '@/components/Navbar'

const ContactUs = () => {
  return (
    <div className='contact-us'>
        <Navbar />
        <Hero />
        <Contact />
    </div>
  )
}

export default ContactUs
