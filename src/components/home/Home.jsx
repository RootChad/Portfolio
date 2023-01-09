import React from 'react'
import "../../css/home.css"
import Me from"../../assets/avatar-1.svg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Cube from './Cube';
import { Link } from 'react-scroll'
function Home() {
  return (
    <section className='home container' id="home">
     <Shapes/>
        <div className='intro'>
          
            <img src={Me} alt="me" className='home_img' />
            <h1 className='home_name'>Irchad</h1>
            <span className="home_education">I'm a Software Developper</span>
            
            <HeaderSocial />
            <Link to="contact" spy={true} smooth={true}> <button className='btn' >
                        Hire Me              
                    </button></Link>
            <ScrollDown />
           
        </div> 
      
    </section> 
  )
}

export default Home