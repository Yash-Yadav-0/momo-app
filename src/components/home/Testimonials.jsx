import React from 'react';
import chillimage from './homepageImage/chillimage.jpeg';
import './Testimonials.css';
import '../../index.css'
import { Quotes } from '../../constants/Quotes';

const Testimonials = () => {
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
          <div >
              <button>Left</button>
              <button>right</button>
          </div>
        </div>
      </div>
      <div>
        <img className="chillimage" src={chillimage} alt="chillImages" />
      </div>
    </div>
  );
};

export default Testimonials;
