import React from 'react'
import './portofolio.css'
import moody from '../../assets/moody.jpg'
import arcSpace from '../../assets/arcSpace.jpg'
import about from '../../assets/about.jpg'



const data = [
  {
    id:1,
    image:arcSpace,
    title:'ArcSpace',
    github:'',
    demo:'https://arcspace.netlify.app/index.html'
  },

  {
    id:2,
    image:moody,
    title:'MOODY',
    github:'',
    demo:''
  },

  {
    id:3,
    image:about,
    title:'Presentation page',
    github:'',
    demo:''
  },

  //la urmatoarele creste id-ul, exemplu urmatorul va fi id=3; 

  

]
const Portofolio = () => {
  return (
    <section id='portoflio'>
       <h5>My recent Work</h5>
       <h2>Portofolio</h2>
    
      <div className="container portofolio__container">
      
         {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portofolio__item'>
          
              <div className="portofolio__item-image">
                  <img src={image} alt={title} />

              </div>
              <h3>{title}</h3>

              <div className='portofolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
            )

            
          })
         }

        



          



      
      </div>
    </section>
  )
}

export default Portofolio