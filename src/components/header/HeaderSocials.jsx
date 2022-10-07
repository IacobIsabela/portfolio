import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'




const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = "https://www.linkedin.com/in/isabela-iacob-8a92b5219/" target="_blank"><BsLinkedin /></a>
        <a href = "https://github.com/" target="_blank"><FaGithub/></a>
        <a href = "https://www.facebook.com/" target="_blank"></a>

    </div>
  )
}

export default HeaderSocials