import React from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaYoutube,
    FaTwitter,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <>  
    <footer className="footer bg-[#F2F4F8] text-[darkcyan] text-[1rem] p-10 justify-around">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Media</h6>
    <a  href='https://github.com/rehanuddin1991' target='_blank' className="link link-hover"> <FaGithub size={30} className="hover:text-gray-600" /></a>
    <a  href='https://facebook.com/rehanuddin1991' target='_blank'  className="link link-hover"><FaFacebook size={30} className="hover:text-blue-500" /></a>
    <a  href='https://twitter.com/' target='_blank'   className="link link-hover"> <FaTwitter size={30} className="hover:text-blue-400" /></a>
    
  </nav>
 
</footer>
<div className="mt-6 text-center">
          <p className='text-[indigo]'>All rights reserved &copy; Binary Planet Ltd.</p>
        </div>
</>
  )
}

export default Footer