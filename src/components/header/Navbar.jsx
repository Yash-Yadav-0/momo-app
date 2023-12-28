import React from 'react'
import {Logo,Facebook,Instagram,Tiktok} from '../../assets/images/Logo'
import './Navbar.css'
import {Link , useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate();

  const navData =[
    {id:1, value:"About Us",path:'/about'},
    {id:2, value:"Our Menu",path:'our-menu'},
    {id:3, value:"Our Services",path:'/our-services'},
    {id:4, value:"Allergy Advices",path:'/allergy-advices'},
  ]
  const socialLinks=[
    {id:1,value:"facebook",logo:<Facebook/>},
    {id:2,value:"instagram",logo:<Instagram/>},
    {id:3,value:"tiktok",logo:<Tiktok/>},
  ]

  const handleNavClick =(path)=>{
    navigate(path);
  }

  return (
    <nav className='nav'>
      <div className='logo-container'>
        <Link to='/'><Logo/></Link>
      </div>
      <div className='link-container'>
        {navData.map((item) => (
          <p key={item.id} onClick={() => handleNavClick(item.path)}>
            {item.value}
          </p>
        ))}
      </div>
      <div className='button-container'>
        {socialLinks.map((item) => (
          item.logo
        ))}
        <Link to='/contact' className='button-contact'>
          Contact Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
