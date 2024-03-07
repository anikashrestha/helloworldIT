import React from 'react';
import './Clients.css';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};
const Clients = () =>  {
    return(
        <div className='group-4'>
        <FadeInSection>
          <span className='text-a'>Our Clients</span>
        </FadeInSection>
        <div className='group-5'>
          
          <div className='wrapper-4'>
          <FadeInSection>
            <div className='box-4'>
              <div className='img-2' />
              <div className='img-3' />
            </div>            
            <span className='text-b'>Information Management System</span>
            </FadeInSection>
          </div>
          
          <div className='wrapper-5' />
          
          <div className='box-5'>
          <FadeInSection>
            <div className='section-4'>
              <div className='img-4' />
              <div className='pic-6' />
            </div>
            <span className='text-b'>Home Appliances</span>
            </FadeInSection>
          </div>
          <div className='section-5' />
          <div className='section-6'>
            <FadeInSection>
            <div className='wrapper-6'>
              <div className='pic-7' />
              <div className='img-5' />
              <div className='pic-8' />
              {/* <div className='pic-9' /> */}
            </div>
            <span className='text-b'>Others</span>
            </FadeInSection>
          </div>
        </div>
      </div>
    );
}
export default Clients;