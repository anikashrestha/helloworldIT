import React from 'react';
import './Nav.css';

export default function Nav() {
    return(
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
              <div className='wrapper-2'>
                <span className='text-2'>Work with Us</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
}