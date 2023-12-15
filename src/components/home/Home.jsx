import React from 'react'
import Plate from '../../assets/images/Plate'
import { Ellipse} from '../../assets/images/Logo'
import './Home.css'
import styled from 'styled-components'
import PaintBrushSvg from '../../assets/images/PaintBrushSvg.svg'

const PaintBrushText=styled.span`
    background: url(${PaintBrushSvg});
    background-size: contain; 
    background-repeat: no-repeat;
    display: inline-block;
    color: white;
    padding: 6px 30px;
`;

const Home = () => {
  return (
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
  )
}
export default Home
