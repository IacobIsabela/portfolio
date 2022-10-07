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
          <small>No Experience--</small>
        </article>

           <article className='about__card'>
            <BsLightbulb className='about__icon'/>
            <h3>Skillssss</h3>
            <small>Those are my skills: </small>
        </article>

        <article className='about__card'>
            <AiOutlineFundProjectionScreen className='about__icon'/>
            <h3>Projects</h3>
            <small>Click here:--- </small>
        </article>

      </div>

      <p>
      mânia este un stat situat în sud-estul Europei Comice, România a introdus noi reforme economice de ordin general (precum cota unică de impozitare, în 2005) și a aderat la alianța politico-militară NATO la 29 martie 2004 și la Uniunea Europeană la 1 ianuarie 2007.
      </p>

      <a href = "#contact" className='btn btn-primary'>Let's talk</a>
      
      </div>
    </div>
    </section>
  )
}

export default About