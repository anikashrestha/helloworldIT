import React from 'react';
import './About.css';
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
  const About = () => {
    return(
        // <div className='main-container'>
            <div className='group-2'>
                <div className='pic-2' />
                <div className='section-2'>
                
                    <div className='section-3'>
                    <span className='textAbout-1'>Web Application Development</span>
                    <div className='box-1'>
                        <span className='textAbout-2'>Empowering </span>
                        <span className='textAbout-3'>Healthcare </span>
                        <span className='textAbout-4'>through</span>
                        <span className='textAbout-5'>
                        
                        <br />
                        Advanced Information Solutions
                        </span>
                    </div>
                    <span className='textAbout-6'>
                        Revolutionizing Health Information Management and Web-based
                        Software Solutions for Excellence in Healthcare.
                    </span>
                    </div>
                    <div className='group-3'>
                    <div className='insta' />
                    <div className='twitter' />
                    <div className='facebook' />
                    </div>
                </div>
                
                <div className='wrapper-3'>
                    <div className='logo' />
                    {/* <div id="introSVGContainer" ></div> */}
                </div>
                
            </div>
        // </div>
    );
}
  
export default About;