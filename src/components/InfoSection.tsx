import React from 'react';

import Image from 'next/image';

import config from '../config/index.json';

const InfoSection: React.FC = () => {
  const { infoSection } = config;

  return (
    <section className="w-full px-3 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-8">
      <div
        className="max-w-[1296px] mx-auto flex flex-col lg:flex-row items-center 
        p-4 xs:p-6 sm:p-8 lg:p-[48px] gap-6 
        bg-gradient-to-r from-[#6047F3] to-[#8D5AFA] rounded-xl"
      >
        {/* Text Content */}
        <div className="flex flex-col items-start gap-3 xs:gap-4 w-full lg:w-[60%]">
          <h2
            className="font-dm-sans font-extrabold 
            text-xl xs:text-2xl sm:text-[26px] 
            leading-[1.3] xs:leading-[1.4] sm:leading-[41px] 
            tracking-[0.02em] text-white text-left w-full"
          >
            {infoSection.title}
          </h2>

          <p
            className="font-dm-sans font-normal 
            text-sm xs:text-base 
            leading-[150%] text-white text-left w-full"
          >
            {infoSection.subtitle1}
          </p>

          <p
            className="font-dm-sans font-normal 
            text-sm xs:text-base 
            leading-[150%] text-white text-left w-full"
          >
            {infoSection.subtitle2}
          </p>
        </div>

        {/* Image Container */}
        <div
          className="relative w-full lg:w-[40%] 
          flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[300px] xs:max-w-[350px] lg:max-w-[372px]">
            <Image
              src="/assets/images/sub-network.svg"
              alt="Network Background"
              width={372}
              height={372}
              className="object-contain transform rotate-30"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
