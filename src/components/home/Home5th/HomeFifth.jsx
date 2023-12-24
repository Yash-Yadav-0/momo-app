import React from 'react';
import chillimage from '../homepageImage/chillimage.jpeg'
import './HomeFifth.css';
import '../Home.css';
import { Quotes } from '../../../constants/Quotes';

const HomeFifth = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_slider">
        <div>
          <p className='big-text-two'>200+ <span style={{color:'var(--primary)'}}>Happy Costomers</span></p>
          <p className='big-text-three 'style={{ color: 'var(--secondary)'}}>What our customers say about us</p>
        </div>
        <div className="quotes">
          {Quotes.map((item, index) => (
            <div key={index}>
              <div style={{
                fontSize: '24px',
                fontStyle: 'italic',
                fontWeight: '400',
                lineHeight: '160%'
              }}>{item.Message}</div>
              <div style={{fontSize:'31px',marginTop:21}}>
                {item.Name}</div>
            </div>
          ))}
          <div className='slider-button' >
              <button className='arrow-button'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6668 8L3.3335 8M3.3335 8L7.3335 12M3.3335 8L7.3335 4" stroke="#252D43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
              <button className='arrow-button'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 8H12.6668M12.6668 8L8.66683 4M12.6668 8L8.66683 12" stroke="#252D43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
          </div>
        </div>
      </div>
      <div>
        <img className="chillimage" src={chillimage} alt="chillImages" />
      </div>
    </div>
  );
};

export default HomeFifth;
