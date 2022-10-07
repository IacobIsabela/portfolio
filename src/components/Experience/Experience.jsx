import React from 'react'
import './experience.css'
import {BsCheckCircle} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    
    <h5>The skills I have</h5>
    <h2>My experience</h2>

     <div className="container experience__container">
     
                  <div className="experience__frontend">
                    <h2>Frontend Development</h2> 
                    <div className="experience__content">
                    
                                <article className='experience_details'>
                                <BsCheckCircle className='experience__details-icon' />
                                <div>
                                  <h3>Html</h3>
                                  <h4 className='text-light'>Experienced</h4></div>
                                </article>

                                <article className='experience_details'>
                                <BsCheckCircle className='experience__details-icon' />
                               <div>
                                  <h3>Css</h3>
                                  <h4 className='text-light'>Experienced</h4>
                               </div>
                                </article>

                                <article className='experience_details'>
                                  <BsCheckCircle className='experience__details-icon' />
                                  <div>
                                    <h3>Html</h3>
                                    <h4 className='text-light'>Experienced</h4>
                                  </div>
                                  </article>

                                <article className='experience_details'>
                                <BsCheckCircle className='experience__details-icon' />
                                <div>
                                    <h3>Html</h3>
                                    <h4 className='text-light'>Experienced</h4>
                                </div>
                                </article>

                                <article className='experience_details'>
                                <BsCheckCircle className='experience__details-icon'/>
                                <div>
                                    <h3>Html</h3>
                                    <h4 className='text-light'>Experienced</h4>
                                </div>
                                </article>
                    
                    </div>

                  </div>
                    {/* end of frontend*/}




                  <div className="experience__backend"> 
                  <h2>Backend Development</h2>
                      <div className="experience__content">
                          
                          
                          <article className='experience_details'>
                          <BsCheckCircle className='experience__details-icon'/>
                          <div>
                              <h3>Html</h3>
                              <h4 className='text-light'>Experienced</h4>
                          </div>
                          </article>

                          <article className='experience_details'>
                          <BsCheckCircle className='experience__details-icon' />
                          <div>
                              <h3>Css</h3>
                              <h4 className='text-light'>Experienced</h4>
                          </div>
                          </article>

                          <article className='experience_details'>
                          <BsCheckCircle className='experience__details-icon'/>
                          <div>
                            <h3>Html</h3>
                            <h4 className='text-light'>Experienced</h4>
                          </div>
                          </article>

                          <article className='experience_details'>
                          <BsCheckCircle className='experience__details-icon'/>
                          <div>
                              <h3>Html</h3>
                              <h4 className='text-light'>Experienced</h4>
                          </div>
                          </article>

                          <article className='experience_details'>
                          <BsCheckCircle className='experience__details-icon'/>
                         <div>
                            <h3>Html</h3>
                            <h4 className='text-light'>Experienced</h4>
                         </div>
                          </article>
                          
                      
                      </div>
                  
                  
                  </div>
     
     </div>
    </section>
  )
}

export default Experience