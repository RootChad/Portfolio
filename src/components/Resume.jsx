import React from 'react'
import "../css/resume.css"
import Data from './Data'
import Card from './Card'
function Resume() {
    return (
        <section className='resume container section' id='resume'>
            <h2 className='section_title'>Experience</h2>

            <div className="resume_container grid">
                <div className='timeline grid'>
                    {Data.map((item, index) => {
                        if (item.category === "education") {
                            return (
                                <Card key={index} icon={item.icon} title={item.title} year={item.year} describe={item.desc} />
                            )
                        }

                    })}
                </div>
                <div className='timeline grid'>
                    {Data.map((item, index) => {
                        if (item.category === "experience") {
                            return (
                                <Card key={index} icon={item.icon} title={item.title} year={item.year} describe={item.desc} />
                            )
                        }

                    })}
                </div>
            </div>
        </section>
    )
}

export default Resume