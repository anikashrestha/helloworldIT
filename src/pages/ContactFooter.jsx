import React from 'react';
import './ContactFooter.css';
// import {useRef} from 'react';
import ref from './Nav';

export default function ContactFooter() {
  
    return(
        <div className='section-d' >
        <div className='box-a' >
          <span className='text-29'>Just an email away.</span>
          <form className="contact-form" >
                  <div className="form-group">
                      <label htmlFor="idea">Idea:</label>
                      <textarea className="form-control" id="idea" rows="3" placeholder="Please enter your idea"></textarea>
                  </div>
                  <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" className="form-control" id="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" placeholder="email@gmail.com" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="contact">Contact:</label>
                      <input type="text" className="form-control" id="contact" placeholder="+977-0000000000" />
                  </div>
                  <button type="submit" className="section-10"><span className='text-32'>Submit</span></button>
              </form>
          
        </div>
        <div className='wrapper-b'>
          <div className='section-11' />
          <div className='group-15'>
            <div className='img-a' />
            <div className='group-16'>
              <div className='img-b' />
              <div className='img-c' />
            </div>
          </div>
        </div>
        <form className='section-12'  >
          <span className='text-33'>
            We will convert your idea <br />
            into an Application.
          </span>
          <div className='wrapper-c'>
            <div className='img-d' />
            <span className='text-34'>
              +977-9841160918,
              <br />
              +977-9845422250
            </span>
          </div>
          <div className='wrapper-d'>
            <div className='img-e' />
            <span className='text-35'>info@helloworldnepal.com</span>
          </div>
        </form>
      </div>
    
    );
}
