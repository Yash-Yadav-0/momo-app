import React from 'react'

import './Home.css'
import thumbsUp from './homepageImage/thumbsUp.png'
import KitchenShow from './KitchenShow'
import Services from './Services'
import HomePageFirst from './HomePageFirst'
import MenuSlider from './MenuSlider'
import Testimonials from './Testimonials'
import HomeContact from './HomeContact'

const Home = () => {
  const Menus =[
    {id:1, value:"Buff"},
    {id:2, value:"Chicken"},
    {id:3, value:"Veg"},
  ];
  return (
    <div>
    <HomePageFirst/>
    <div className="home_about_us">
      <div className="about_us_image">
        <img src={thumbsUp} alt='thumbsUp'/>
      </div>
      <div className="about_us_content">
        <h3 className='big-text-two'>Why Costomer <span style={{color:'var(--primary)'}}>Love Us</span></h3>
        <p className='neutral-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Autem id, fugit hic tempore nemo fuga temporibus velit voluptas obcaecati 
          sapiente iure inventore, doloremque, illum asperiores recusandae rem eaque mollitia? Minus.</p>
        <button className='home-content-button'>Explore Our Story</button>  
      </div>
    </div>
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
    <div>
      <div className="recipe_they_want big-text-two">
        <p><span style={{color:'var(--primary)'}}>We Offer People </span> The Service They Want</p></div>
    </div>
    <KitchenShow/>
    <Services/>
    <Testimonials/>
    <HomeContact/>
    </div>
  )
}
export default Home
