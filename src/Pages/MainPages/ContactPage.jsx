import React from 'react'
import { Helmet } from 'react-helmet-async'

const ContactPage = () => {
  return (
    <div className='mt-14 p-12 dark:bg-[#1e2730] dark:text-[white]  text-3xl  flex items-center justify-center font-semibold '>
      <Helmet>
    <title>Contact Us</title>

    </Helmet>
        <div className='space-y-5' >
            <h1 className='text-[indigo] dark:text-[wheat]'>Contact With Us</h1>
            <h2>Email:rehan.ictd@gmail.com</h2>
            <h2>Phone:01674194142</h2>
            <h2>Web:binary-planet.com</h2>

        </div>
        
    </div>
  )
}

export default ContactPage