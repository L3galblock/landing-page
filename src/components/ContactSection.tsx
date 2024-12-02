import React from 'react';

import Image from 'next/image';

import ContactForm from './ContactForm';

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex flex-row items-center gap-2 w-full">
    <div className="w-6 h-6">
      <Image
        src="/assets/images/check-circle.svg"
        alt="check"
        width={24}
        height={24}
      />
    </div>
    <span className="font-dm-sans font-normal text-lg leading-[160%] text-white">
      {text}
    </span>
  </div>
);

const ContactSection: React.FC = () => {
  const features = [
    'Unified Multi-Network Analysis',
    'Cross-Chain Network Support',
    'Wallet Overview and Insights',
    'Address Pathfinder Tool',
    'Real-Time Wallet Monitoring',
  ];

  return (
    <section className="w-full relative mb-16 mt-6">
      {/* Network Background Image */}
      <div className="absolute left-1/4 top-[51px] -translate-x-[172px] opacity-90 pointer-events-none">
        <Image
          src="/assets/images/contact-network-image.svg"
          alt="network background"
          width={544}
          height={825}
          className="scale-y-[1]"
        />
      </div>

      <div className="flex flex-col lg:flex-row max-w-[1296px] mx-auto gap-8 relative">
        {/* Left Column */}
        <div className="flex flex-col items-start p-12 lg:p-[48px] lg:pr-24 gap-6 w-full lg:w-[636px]">
          <h1 className="text-left font-dm-sans font-bold text-4xl lg:text-[64px] leading-tight lg:leading-[83px] tracking-[0.05em] text-white w-full lg:w-[492px]">
            Ready to Action!
          </h1>

          <p className="text-left font-dm-sans font-normal text-lg leading-[160%] text-white w-full lg:w-[492px]">
            You can start your investigation with LegalBlock right away by
            requesting a demo.
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-3 w-full lg:w-[492px]">
            {features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div id="contact-section" className="w-full lg:w-[660px] relative z-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
