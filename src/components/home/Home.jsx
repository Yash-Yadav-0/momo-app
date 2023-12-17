import React from 'react'
import Plate from '../../assets/images/Plate'
import { Ellipse} from '../../assets/images/Logo'
import './Home.css'
import styled from 'styled-components'
import PaintBrushSvg from '../../assets/images/PaintBrushSvg.svg'
import thumbsUp from '../../assets/images/thumbsUp.png'

const PaintBrushText=styled.span`
    background: url(${PaintBrushSvg});
    background-size: contain; 
    background-repeat: no-repeat;
    display: inline-block;
    color: white;
    padding: 6px 30px;
`;

const Home = () => {
  const Menus =[
    {id:1, value:"Buff"},
    {id:2, value:"Chicken"},
    {id:3, value:"Veg"},
  ];
  return (
    <div>
    <div className='home-page'>
      <div className='home-content'>
          <p style={{color:'var(--neutral)', marginBottom:'-20px'}}> RESTURANT</p>
          <div className='big-text-one'>
          <p>The <PaintBrushText>#One</PaintBrushText>
            </p>
            <p>Momo <span style={{color:'var(--primary)'}}>Resturant</span></p>
          </div>  
          <p style={{fontSize:'20px',fontWeight:'600',lineHeight:'120%'}}>
            More than <span className='big-text-three' style={{color:'var(--primary)'}}>20+ Varieties</span> of momo available for you</p>
          <button className='home-content-button'>
            Explore Food Menu
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> 
          </button>
      </div>
      <div>
      <div className='plate-image'><Plate/></div>
      <div className='ellipse-orange'><Ellipse/></div>
      
    </div>
    </div>
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
        <h3>Our Most Popular Recipe</h3>
        <p className="neutral-text">Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
      </div>
      <div>
        {Menus.map((item)=>(
          <button key={item.id}>{item.value}</button>
        ))}
        {/* {Menus.map((Menu, index) => (
          <button key={index} className='home-content-button'>{Menu}</button>
        ))} */}
    </div>
      <div>
        <h1>Photos</h1>
      </div>
      <div>
        <button className="home-content-button">Explore Our Menu</button>
      </div>
    </div>
    </div>
  )
}
export default Home
