import React from 'react'
import "../../css/home.css"
import Me from"../../assets/avatar-1.svg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
function Home() {
  return (
    <section className='home container' id="home">
      
        <div className='intro'>
          
            <img src={Me} alt="me" className='home_img' />
            <h1 className='home_name'>Irchad</h1>
            <span className="home_education">I'm a Software Developper</span>
            
            <HeaderSocial />
            <a href="#contact" className="btn">Hire me</a>
            <ScrollDown />
           
        </div> 
       
    </section> 
  )
}

export default Home