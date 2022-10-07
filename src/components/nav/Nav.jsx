import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {FcLike} from 'react-icons/fc'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import {GiBookshelf} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>

      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#portoflio"onClick={() => setActiveNav('#portoflio')} className={activeNav==='#portoflio' ? 'active' : ''}><GiBookshelf/></a>
      <a href="#services"onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><FcLike/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Nav