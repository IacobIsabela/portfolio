import React from 'react'
import'./About.css'
import eu from '../../assets/eu.png'
import{FiAward} from 'react-icons/fi'
import{BsLightbulb} from 'react-icons/bs'
import{AiOutlineFundProjectionScreen} from 'react-icons/ai'





const About = () => {
  return (
    <section id='about'>
      
      <h5>Get to know</h5>
      <h2>About me</h2>

    <div className="container about__container">
       <div className="about__me">
          <div className="about__me-image">

            <img src={eu} alt="About Image" /> 

      </div>
    </div>

      <div className="about__content">
        <div className="about__cards">
           <article className='about__card'>
          <FiAward className='about__icon'/>
          <h3>Experience</h3>
          <small>Personal projects</small>
        </article>

           <article className='about__card'>
            <BsLightbulb className='about__icon'/>
            <h3>Skills</h3>
            <small> Teamwork </small>
            <small> Fast learner </small>
            <small> Hardworking </small>
        </article>

        <article className='about__card'>
            <AiOutlineFundProjectionScreen className='about__icon'/>
            <h3>Languages</h3>
            <small>Italian </small>
            <small>English </small>
            <small>Romanian </small>



        </article>

      </div>

      <p>
      If I caught your attention, please contact me! 
      </p>

      <a href = "#contact" className='btn btn-primary'>Let's talk</a>
      
      </div>
    </div>
    </section>
  )
}

export default About