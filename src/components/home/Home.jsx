import React from 'react'

import './Home.css'
import HomeFirst from './Home1st/HomeFirst'
import HomeSecond from './Home2nd/HomeSecond'
import HomeThird from './Home3rd/HomeThird'
import HomeFourth from './Home4th/HomeFourth'
import HomeFifth from './Home5th/HomeFifth'
import HomeSixth from './Home6th/HomeSixth'

const Home = () => {
  
  return (
    <div>
    <HomeFirst/>
    <HomeSecond/>
    <HomeThird/>
    <HomeFourth/>
    <HomeFifth/>
    <HomeSixth/>
    <div className='homepage-map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14129.993837656892!2d85.33749810285643!3d27.701892133754292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1703441371733!5m2!1sen!2snp" 
    width="1440" 
    height="640" 
    style={{border:'5px',borderColor:'green'}}
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  )
}
export default Home
