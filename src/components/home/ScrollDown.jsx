import React from 'react'

function ScrollDown() {
  return (
    <div className='scroll-down'>
        <a href='#about' className='mouse_wrapper '>
            <span className='home_scroll_name'>Scroll Down</span>
            <span className='mouse'>
                <span className='wheel'></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown