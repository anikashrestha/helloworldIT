import React from 'react';
import './Clients.css';

export default function Clients() {
    return(
        <div className='group-4'>
        <span className='text-a'>Our Clients</span>
        <div className='group-5'>
          <div className='wrapper-4'>
            <div className='box-4'>
              <div className='img-2' />
              <div className='img-3' />
            </div>
            <span className='text-b'>Information Management System</span>
          </div>
          <div className='wrapper-5' />
          <div className='box-5'>
            <div className='section-4'>
              <div className='img-4' />
              <div className='pic-6' />
            </div>
            <span className='text-b'>Home Appliances</span>
          </div>
          <div className='section-5' />
          <div className='section-6'>
            <div className='wrapper-6'>
              <div className='pic-7' />
              <div className='img-5' />
              <div className='pic-8' />
              {/* <div className='pic-9' /> */}
            </div>
            <span className='text-b'>Others</span>
          </div>
        </div>
      </div>
    );
}