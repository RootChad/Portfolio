import React from 'react'
import { Link } from 'react-router-dom'
import "../css/about.css"
import Image from "../assets/avatar-2.svg"
function About() {
    return (
        <section className='about container section' id='about'>
            <h2 className='section_title'>About me</h2>
            <div className="about_container grid">
                <img src={Image} alt="me" className='about_img' />
                <div className='about_data grid'>
                    <div className='about_info'>
                        <p className='about_description'>I'm a Software Developer, I have been working in the industry for 3 years. I have worked on many projects, both as a freelancer and as a team member. I have experience in the development of website, mobile application, video game.</p>
                        <a href={Image} className='btn' download="CV" >Download CV</a>
                        
                    </div>

                    <div className='about_skills grid'>
                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Web Development</h3>
                                <div className='skills_icons'>

                                    <i class="fa-brands fa-js"></i>
                                    <i class="fa-brands fa-node"></i>
                                    <i class="fa-brands fa-php"></i>
                                    <i class="fa-brands fa-react"></i>
                                </div>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage web'></span>
                            </div>
                        </div>
                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>Game Development</h3>
                                <div className='skills_icons'>
                                    <i className="fa-brands fa-unity"></i>
                                    <i class="fa-brands fa-android"></i>
                                    <i class="fa-solid fa-vr-cardboard"></i>
                                </div>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage game'></span>
                            </div>
                        </div>
                        <div className='skills_data'>
                            <div className='skills_titles'>
                                <h3 className='skills_name'>AI</h3>
                                <div className='skills_icons'>
                                    <i class="fa-brands fa-python"></i>
                                </div>
                            </div>
                            <div className='skills_bar'>
                                <span className='skills_percentage skills_html ai'></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About