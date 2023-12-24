import React from 'react'
import KitchenShow from './KitchenShow'
import Services from './Services'

const HomeFourth = () => {
  return (
    <div>
      <div className="recipe_they_want big-text-two">
        <p><span style={{color:'var(--primary)'}}>We Offer People </span> The Service They Want</p></div>
    <KitchenShow/>
    <Services/>
    </div>
  )
}

export default HomeFourth
