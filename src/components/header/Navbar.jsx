import React from 'react'
import {Logo,Facebook,Instagram,Tiktok} from '../../assets/images/Logo'
import './Navbar.css'

const Navbar = () => {

  const navData =[
    {id:1, value:"About Us"},
    {id:2, value:"Our Menu"},
    {id:3, value:"Our Services"},
    {id:4, value:"Allergy Advices"},
  ]
  const socialLinks=[
    {id:1,value:"facebook",logo:<Facebook/>},
    {id:2,value:"instagram",logo:<Instagram/>},
    {id:3,value:"tiktok",logo:<Tiktok/>},
  ]

  return (
    <nav className='nav'>
      <div className='logo-container'>
        <Logo/>
      </div>
      <div className='link-container'>
        {navData.map((item)=>{
          return<p key={item.id}>{item.value}</p>;
        })}
      </div>
      <div className='button-container'>
        {socialLinks.map((item) => (
          item.logo
        ))}
        <button className='button-contact'>Contact Us</button>
      </div>
    </nav>
  )
}

export default Navbar;
