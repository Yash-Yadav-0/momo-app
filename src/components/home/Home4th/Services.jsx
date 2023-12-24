import React from 'react'
import {QualityFood_Logo, PrivateParty_Logo, Categring_Logo} from '../homepageImage/ServiceLogo'
import './Services.css'
import Card from './Card'

const services=[
    {id:1, value:'Quality Food', logo:<QualityFood_Logo/>,text:'Only the best food with top quality products and ingredients'},
    {id:2, value:'Private Party', logo:<PrivateParty_Logo/>,text:'Get the best food for all your private parties and gatherings'},
    {id:3, value:'Categring', logo:<Categring_Logo/>,text:'Get the best food for any occasions and gatherings'},
]

const Services = () => {
    

return (
    <div className="services">
      <div className="services_logo">
        {services.map((item) => (
          <Card key={item.id} title={item.value} text={item.text} logo={item.logo} />
        ))}
      </div>
      <button className="home-content-button">Explore Our Services
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7937 12.3537L20.1472 12.0001L19.7937 11.6466L14.2537 6.10656C14.1589 6.01183 14.1589 5.84841 14.2537 5.75367C14.3484 5.65893 14.5118 5.65893 14.6066 5.75367L20.6766 11.8237C20.7713 11.9184 20.7713 12.0818 20.6766 12.1766L14.6066 18.2466C14.5553 18.2979 14.4947 18.3201 14.4301 18.3201C14.3656 18.3201 14.305 18.2979 14.2537 18.2466C14.1589 18.1518 14.1589 17.9884 14.2537 17.8937L19.7937 12.3537Z" fill="white" stroke="white"/>
      <path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="white"/>
      </svg>
      </button>
    </div>
)
}

export default Services
