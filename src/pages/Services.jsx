import React from 'react';
import './Services.css';
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
const Services = () =>   {
    return(
        <div className='wrapper-7'>
        <FadeInSection>
        <div className='box-6'>
          
          <span className='text-e'>Projects</span>
          <span className='text-f'>Our Services</span>
          <span className='text-10'>
            Successful projects speaks our praise more the claims
            <br />
            of our unseen expertise.
          </span>
          
        </div>
        </FadeInSection> 
        <div className='group-6'>
          <div className='group-7'>
            <FadeInSection>
            <div className='group-8'>
              <div className='pic-a' />
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className='section-7'>
              
              <span className='text-11'>Save the Children</span>
              
              <div className='group-9'>
                
                <div className='box-7'>
                
                  <span className='text-12'>GXMIS</span>
                  
                </div>
                <div className='group-a'>
                
                  <span className='text-13'>Web Application</span>
                  
                </div>
                <div className='section-8'>
                  
                  <span className='text-14'>Responsive</span>
                  
                </div>
                <div className='section-9'>
                  
                  <span className='text-15'>DHIS2</span>
                  
                </div>
                
              </div>
              <span className='text-16'>
                Our works for Nepal Tuberculosis center inclues various
                applications with DHIS2 data management framework, DHIS2
                customization and Data dashboard prepartion of the data sent by
                Genexpert Machines
                <br />
              </span>
            </div>
            </FadeInSection>

          </div>
          
          <div className='box-8'>
          <FadeInSection>
            <div className='wrapper-8'>
              <span className='text-17'>Distar Home</span>
              <div className='section-a'>
                <div className='section-b'>
                  <span className='text-18'>Web Application</span>
                </div>
                <div className='group-b'>
                  <span className='text-19'>Ticketing System</span>
                </div>
                <div className='group-c'>
                  <span className='text-1a'>Django</span>
                </div>
              </div>
              <span className='text-1b'>
                This work repsents the quality assurance part we provide for our
                clients. It is a very well tested system which hanldes a large
                amount fo data of all the technical problesm faced by the
                customer of Distar.
                <br />
              </span>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className='group-d'>
              <div className='img-6' />
            </div>
            </FadeInSection>
          </div>
        </div>
       
        <button className='group-e'>
          <span className='text-1c'>Work with Us</span>
        </button>
        
        <div className='pic-c2' />
      </div>
    );
}

export default Services;