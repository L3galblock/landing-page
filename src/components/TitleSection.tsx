import React, { useEffect, useState } from 'react';

import config from '../config/index.json';

const TitleSection: React.FC = () => {
  const { titleSection } = config;
  const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToAbout = () => {
      const contactSection = document.getElementById('contact-section');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section className="w-full flex px-4 sm:px-6 lg:px-8 sm:mt-10">
      <div className="flex flex-col items-start w-full max-w-[527px] py-8 sm:py-12 md:py-16">
        <h1
          className="font-ag-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            leading-tight text-left text-basic-white mb-4 sm:mb-6"
          style={{ 
            lineHeight: '1.2',
            letterSpacing: '0.05em',
          }}
        >
          {titleSection.title}
        </h1>

        <p
          className="font-dm-sans text-sm sm:text-base md:text-lg 
            font-extralight mb-6 sm:mb-8 text-left text-basic-white
            max-w-[90%] sm:max-w-full"
          style={{ lineHeight: '160%' }}
        >
          {titleSection.description}
        </p>

        <div className="w-full flex justify-start">
          <button 
            onClick={scrollToAbout} 
            className="bg-green-500 text-basic-white font-poppins
              text-sm sm:text-base
              px-4 py-2 sm:px-6 sm:py-3
              rounded hover:bg-green-700 transition-colors
              whitespace-nowrap"
          >
            {titleSection.callToAction.text}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
