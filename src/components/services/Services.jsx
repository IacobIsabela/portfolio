import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
    
      <h5>What I like</h5>
      <h2>Hobbies</h2>

        <div className="container services__container">
            <article className='service'>
                <div className="service__head">
                    <h3>Movies</h3>
                </div>

                <ul className="service_list">
                
                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>History movies.</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>SF movies.</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Thriller movies.</p>
                  </li>

                  

                </ul>
            </article>

            <article className='service'>
                <div className="service__head">
                    <h3>Economy.</h3>
                </div>

                <ul className="service_list">
                
                  

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Understanding economic phenomenon.</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Accounting</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Investing</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Statistics</p>
                  </li>

                </ul>
            </article>

            <article className='service'>
                <div className="service__head">
                    <h3>Books</h3>
                </div>

                <ul className="service_list">
                
                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Biographies</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Psychological</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Fantasy</p>
                  </li>

                  <li>
                    <AiOutlineCheck className='service_list-icon'/>
                    <p>Poetry</p>
                  </li>

                  

                </ul>
            </article>

            
        </div>
    
    </section>
  )
}

export default Services