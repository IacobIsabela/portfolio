import React from 'react'
import './header.css'
import CTA from './CTA'
import meok5 from '../../assets/meok5.png'
import HeaderSocials from './HeaderSocials'
import MyBouncingText from './MyBouncingText'


const header = () => {
  return (
    <header>

        <div className="container header__container">

          
        <div className='header_left'> 
            <MyBouncingText/>
            <CTA/> 
            <HeaderSocials/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        
        </div>
             

        <div className='header_right'>
          <div className="me">
          <img src={meok5} alt ="me"/>
        </div>

        </div>
         

      </div>

        
       
    </header>
  )
}

export default header