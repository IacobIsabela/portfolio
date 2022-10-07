import React from 'react'
import './Contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mphwzb8', 'template_cei7t6d', form.current, 'toX_LfIzLYJFOqIlc')
      e.target.reset()
  }; 
  
  return (
    <section id='contact'>
    
    <h5>Get in touch</h5>
    <h2>Contact me</h2>

    <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <HiOutlineMailOpen className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>iacobisabela726@yahoo.com</h5>
        <a href="mailto:iacobisabela726@yahoo" target="_blank">Send a message</a>
      </article>

      <article className="contact__option">
      <RiMessengerLine className='contact__option-icon'/>
      <h4>Messenger</h4>
      <h5>Iacob Isabela</h5>
      <a href="https://m.me/isabela.iacob.31"  target="_blank">Send a message</a>
    </article>

    <article className="contact__option">
    <RiWhatsappLine className='contact__option-icon'/>
    <h4>Whatsapp</h4>
    <h5>+40730396442</h5>
    <a href="https://api.whatsapp.com/send?phone=40730396442"  target="_blank">Send a message</a>
  </article>


    </div>



    <form ref={form} onSubmit={sendEmail}>

        <input type="text" name = 'name' placeholder='Your Full Name' required/>
        <input type="email" name = 'email' placeholder='Your Email' required/>
        <textarea name = "message"  rows="7" placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary'> Send Message</button>


        
    </form>
    
    </div>
    
    </section>
  )
}

export default Contact