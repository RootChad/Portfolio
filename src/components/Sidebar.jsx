import React, {useState} from 'react'
import "../css/sidebar.css"
import Logo from "../assets/logo.svg";
function Sidebar() {
    const [toggle, showMenu] = useState(false);

    return (
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href='#home' className='nav_logo'>
                <img src={Logo} alt='logo' />
            </a>
            <nav className='nav'>
                <div className='nav_menu'>
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <a href='#home' className='nav_link' >
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#about' className='nav_link'>
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        
                        <li className='nav_item'>
                            <a href='#resume' className='nav_link'>
                            <i className="icon-graduation"></i>
                            </a>
                        </li>
                       
                        <li className='nav_item'>
                            <a href='#work' className='nav_link'>
                            <i className="icon-note"></i> 
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href='#contact' className='nav_link'>
                            <i className="icon-bubble"></i> 
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </nav>

            <div className='nav_footer'>
                <span className="copyrigth">© 2023 - 2024.</span>
            </div>
        </aside>

        <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={()=>showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    )
}

export default Sidebar
