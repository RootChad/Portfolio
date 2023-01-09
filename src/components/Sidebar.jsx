import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "../css/sidebar.css"
import Logo from "../assets/logo.svg";
function Sidebar() {
    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <Link to="home" spy={true} smooth={true} className='nav_logo'>

                    <img src={Logo} alt='logo' />

                </Link>
                <nav className='nav'>
                    <div className='nav_menu'>
                        <ul className='nav_list'>
                            <li className='nav_item'>
                                <Link to="home" spy={true} smooth={true} className='nav_link'><i className="icon-home"></i></Link>
                            </li>
                            <li className='nav_item'>
                                <Link to="about" spy={true} smooth={true} className='nav_link'><i className="icon-user-following"></i></Link>
                            </li>

                            <li className='nav_item'>
                                <Link to="resume" spy={true} smooth={true} className='nav_link'><i className="icon-graduation"></i></Link>
                            </li>

                            <li className='nav_item'>
                                <Link to="work" spy={true} smooth={true} className='nav_link'><i className="icon-note"></i></Link>
                            </li>
                            <li className='nav_item'>
                                <Link to="contact" spy={true} smooth={true} className='nav_link'><i className="icon-bubble"></i></Link>
                            </li>

                        </ul>
                    </div>
                </nav>

                <div className='nav_footer'>
                    <span className="copyrigth">© 2023 - 2024.</span>
                </div>
            </aside>

            <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    )
}

export default Sidebar
