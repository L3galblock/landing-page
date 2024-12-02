import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import config from '../config/index.json';

const Header: React.FC = () => {
  const { header } = config;
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section functions
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    const teamSection = document.getElementById('team-section');
    teamSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4 z-70">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Login is not ready while Beta registrations
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Please register and we will let you know when it is ready.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    ), {
      duration: 4000,
      position: 'top-center',
    });
  };

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 
        flex justify-between items-center 
        py-2 xs:py-3 sm:py-4 lg:py-5 
        px-3 xs:px-4 sm:px-8 lg:px-12 
        z-50
        transition-all duration-300
        ${scrolled 
          ? 'bg-white text-[#1B0F2E] shadow-lg' 
          : 'bg-transparent text-basic-white'}
      `}>
        <div className="flex items-center">
          <img 
            src={scrolled ? "/assets/images/black-logo.svg" : header.logo}
            alt="Legal Block" 
            className="h-6 xs:h-7 sm:h-8" 
            onClick={scrollToTop}
          />
        </div>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        <nav className="hidden lg:flex space-x-6 font-poppins">
          <button 
            onClick={scrollToAbout} 
            className={`hover:text-green-500 transition-colors text-base
              ${scrolled ? 'text-[#1B0F2E]' : 'text-basic-white'}`}
          >
            {header.about}
          </button>
          <button 
            onClick={scrollToFeatures} 
            className={`hover:text-green-500 transition-colors text-base
              ${scrolled ? 'text-[#1B0F2E]' : 'text-basic-white'}`}
          >
            {header.solutions}
          </button>
          <button 
            onClick={scrollToContact} 
            className={`hover:text-green-500 transition-colors text-base
              ${scrolled ? 'text-[#1B0F2E]' : 'text-basic-white'}`}
          >
            {header.contact}
          </button>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
           <button
            onClick={handleLogin}
            className={`
            font-poppins 
            text-base px-6 py-2 
            rounded 
            transition-colors
            ${scrolled 
              ? 'bg-[#1B0F2E] text-white hover:bg-[#2D1A47]' 
              : 'bg-basic-white text-black hover:bg-gray-100'}
          `}>
            {header.login}
          </button>
          <button
              onClick={() => {
              scrollToAbout();
            }}
            className="
              bg-green-500 text-basic-white font-poppins 
            text-base px-6 py-2 
            rounded 
            hover:bg-green-700 transition-colors
          ">
            {header.demoButton}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="
          lg:hidden 
          fixed top-[48px] xs:top-[52px] sm:top-[60px] 
          left-0 right-0 
          bg-white 
          shadow-lg
          py-4
          z-40
        ">
          <nav className="flex flex-col px-4">
            <div className="flex flex-col space-y-4 mb-4">
              <button 
                onClick={() => {
                  scrollToTop();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm xs:text-base hover:text-green-500 text-[#1B0F2E] transition-colors"
              >
                {header.home}
              </button>
              <button 
                onClick={() => {
                  scrollToAbout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm xs:text-base hover:text-green-500 text-[#1B0F2E] transition-colors"
              >
                {header.about}
              </button>
              <button 
                onClick={() => {
                  scrollToFeatures();
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm xs:text-base hover:text-green-500 text-[#1B0F2E] transition-colors"
              >
                {header.solutions}
              </button>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
               <button
                onClick={handleLogin}
                className="
                flex-1
                bg-[#1B0F2E] text-white font-poppins 
                text-sm xs:text-base
                px-3 py-1.5 xs:px-4 xs:py-2
                rounded 
                hover:bg-[#2D1A47] transition-colors
                text-center
              ">
                {header.login}
              </button>
              <button  
               className="
                flex-1
                bg-green-500 text-basic-white font-poppins 
                text-sm xs:text-base
                px-3 py-1.5 xs:px-4 xs:py-2
                rounded 
                hover:bg-green-700 transition-colors
                text-center
              ">
                {header.demoButton}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
