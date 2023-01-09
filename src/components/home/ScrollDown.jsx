import React from 'react'
import { Link } from 'react-scroll'
function ScrollDown() {
  return (
    <div className='scroll-down'>
      <Link to="about" spy={true} smooth={true}  className='mouse_wrapper'> 
        
            <span className='home_scroll_name'>Scroll Down</span>
            <span className='mouse'>
                <span className='wheel'></span>
            </span>
       
        </Link>
    </div>
  )
}

export default ScrollDown