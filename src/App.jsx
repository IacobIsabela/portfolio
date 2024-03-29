import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/services/Services'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return(
    <>
    
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portofolio/>
      <Services/>
      
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App