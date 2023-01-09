import React, {useState} from 'react'
import "../css/portfolio.css"
import Menu from './Menu'

function Portfolio() {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })
        setItems(updatedItems);
    }
    
    return (
        <section className='work container section' id="work">
            <h2 className='section_title'>Recent Works</h2>
            <div className='work_filters'>
                <span className='work_item'onClick={()=>setItems(Menu)}>Everything</span>
                <span className='work_item' onClick={()=>filterItem("Game")}>Game</span>
                <span className='work_item'onClick={()=>filterItem("Web")}>WebSite</span>
                <span className='work_item'onClick={()=>filterItem("AI")}>AI</span>
            </div>
            <div className='work_container grid'>
                {items.map((item, index) => {
                    const{id, image, title, category,link} = item;
                    return (
                        <div className='work_card' key={index}>
                            <div className='work_thumbnail'>
                                <img src={image} alt="" className='work_img'/>
                                <div className='work_mask'></div>
                            </div>

                            <span className='work_category'>{category}</span>
                            <h3 className='work_title'>{title}</h3>
                            <a href={link} className="work_button">
                                <i className="icon-link work_button-icon"></i>
                            </a>
                        </div>
                    )
                }
                )}
            </div>
        </section>
    )
}

export default Portfolio