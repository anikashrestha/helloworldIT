import React from 'react';
import './Nav.css';
// import './js/Nav.js';
import {useRef} from 'react';




export default function Nav() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className='main-container'>
        <div className='section'>
          <div className='faded_pic' />
          <div className='wrapper'>
          
            <div className='logo_name' />
            <div className='group'>
              <div className='box'>
                <span className='text'>Blog</span>
                <div className='box-2' />
                <span className='text'>Team</span>
              </div>
              
                <button className='wrapper-2' onClick={handleClick}>
                  <span className='text-2'>Work with Us</span>
                {/* </div> */}
               
              </button>
            </div>
          </div>
        </div>
        
      </div>
    );
}