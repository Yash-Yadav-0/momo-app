import React from 'react'
import {Logo,Facebook,Instagram,Tiktok,Linkedin,Twitter,Youtube} from '../../assets/images/Logo'
import './Footer.css'

const Footer = () => {

  const navData =[
    {id:1, value:"About Us"},
    {id:2, value:"Our Menu"},
    {id:3, value:"Our Services"},
    {id:4, value:"Allergy Advices"},
  ]
  const legalData=[
    {id:1,value:"Terms & Conditions"},
    {id:2,value:"Privacy Policy"},
    {id:3,value:"Support"},
  ]
  const socialLinks=[
    {id:1,value:"facebook",logo:<Facebook/>},
    {id:2,value:"instagram",logo:<Instagram/>},
    {id:3,value:"tiktok",logo:<Tiktok/>},
    {id:4,value:"linkedin",logo:<Linkedin/>},
    {id:5,value:"twitter",logo:<Twitter/>},
    {id:6,value:"youtube",logo:<Youtube/>},
  ]

  return (
    <footer>
      <div className='footer-section'>
        <div className='footer-logo'>
          <Logo/>
          <div>
          <p className='neutral-text'>Lorem ipsum dolor sit amet consectetur. 
            Elit sem tempor egestas molestie. 
            Volutpat quis egestas porttitor turpis sit in. 
            Lorem nunc nullam morbi urna amet suspendisse nullam ac vivamus.</p>
        </div>
        </div>
        <div className='footer-links'>
          <div className='footer-links-container'>
            <p className='secondary-text'>momos</p>
            <div className='neutral-text'>
              {navData.map((item)=>{
                return<p key={item.id}>{item.value}</p>;
              })}
            </div>
          </div>
          <div className='footer-links-container'>
            <p className='secondary-text'>Legals</p>
            <div className='neutral-text'>
              {legalData.map((item)=>{
                return<p key={item.id}>{item.value}</p>;
              })}
            </div>
          </div>
          <div className='footer-links-container'>
            <p className='secondary-text'>Follow Us</p>
            <div className='button-container-footer'>
            {socialLinks.map((item) => (
              item.logo
            ))}
            </div>
          </div>
        </div>
      </div>
      <div><p className='neutral-text copyright'>Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.</p></div>
    </footer>
  )
}

export default Footer
