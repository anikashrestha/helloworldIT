import React from 'react';
import './MainTestimonial.css';
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
const MainTestimonials = () => {
    return(
        <div className='section-c'>
        <div className='group-10' />
        <div className='group-11'>
          <FadeInSection>
          <div className='img-7' />
          <span className='text-20'>
            “Great service and on time deliveries with exceptional servers.”
          </span>
          <span className='text-21'>Rohit Kumar Shrestha</span>
          <span className='text-22'>Founder at Distar</span>
          </FadeInSection>
        </div>
        <div className='box-9'>
          <FadeInSection>
          <div className='pic-b' />
          <span className='text-23'>
            “I could not be more thrilled that I ended up deciding on Circle to
            become the home of the Lightbulb Moment community.”
          </span>
          <span className='text-24'>Rohit Kumar Shrestha</span>
          <span className='text-25'>Founder at Kimatsu</span>
          </FadeInSection>
        </div>
        <div className='group-12'>
          <FadeInSection>
          <div className='img-8' />
          <span className='text-26'>
            “Yet preference connection unpleasant yet melancholy but end
            appearance.”
          </span>
          <span className='text-27'>Rohit Kumar Shrestha</span>
          <span className='text-28'>Founder at Google</span>
          </FadeInSection>
        </div>
        {/* <div className='slider' /> */}
      </div>
    );
}
export default MainTestimonials;