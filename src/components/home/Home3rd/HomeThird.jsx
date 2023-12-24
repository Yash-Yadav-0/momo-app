import React from 'react'
import MenuSlider from './MenuSlider'
import '../Home.css'


const HomeThird = () => {
    const Menus =[
        {id:1, value:"Buff"},
        {id:2, value:"Chicken"},
        {id:3, value:"Veg"},
      ];
  return (
    <div className="recipes_home">
      <div className='recipes_home_heading'>
        <h3 className='big-text-two'>Our <span style={{color:'var(--primary)'}}>Most Popular </span>Recipies</h3>
        <p className="neutral-text">Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
      </div>
      <div className='recipes_button'>
        {Menus.map((item)=>(
          <button className='home-content-button' key={item.id}>{item.value}</button>
        ))}
    </div>
        <MenuSlider/>
      <div>
        <button className="home-content-button">Explore Our Menu</button>
      </div>
    </div>
  )
}

export default HomeThird
