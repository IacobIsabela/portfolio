import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
    
        <a href="#" className='footer__logo'> Iacob Isabela</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portofolio">Portofolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
        
          <a href="https://github"><BsGithub/></a>
          <a href="https://instagram.com"><BsInstagram/></a>
          <a href="https://linkedin.com"><BsLinkedin/></a>
        
        </div>

        <div className="footer__copyright">
          <small>
          &copy; Iacob Isabela. All rights reserved

          </small>
        </div>

    </footer>
  )
}

export default Footer