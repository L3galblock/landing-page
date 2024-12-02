import React, { Suspense, lazy } from 'react';

import ContactSection from '../components/ContactSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import GradientRectangle from '../components/GradientRectangle';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import SupportedTokens from '../components/SupportedTokens';
import Team from '../components/Team';
import TitleSection from '../components/TitleSection';
// import config from '../config/index.json';

const DynamicBackground = lazy(() => import('../components/DynamicBackground'));

const LandingPage: React.FC = () => {
  // const { landingPage } = config;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <GradientRectangle />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicBackground />
      </Suspense>
      <div
        className="absolute left-0 right-0 w-full -z-40"
        style={{
          height: '480px',
          marginTop: '40vh', // This will push it below the viewport
          background:
            'linear-gradient(180deg, rgba(27, 15, 46, 0) 0%, #1B0F2E 50%)',
        }}
      ></div>

      <Header />

      <main className="relative flex flex-col text-center py-8 lg:px-12 sm:px-4 xs:px-1">
        <TitleSection />
        <SupportedTokens />
        <Features />
        <InfoSection />
        <Team />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
