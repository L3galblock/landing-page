import React from 'react';

import Image from 'next/image';

const FeatureCard = ({
  icon,
  title,
  description,
  isLast = false,
}: {
  icon: string;
  title: string;
  description: string;
  isLast?: boolean;
}) => {
  return (
    <div
      className={`
      flex flex-col 
      ${isLast ? 'items-center justify-center' : 'items-start'} 
      p-4 xs:p-5 sm:p-6 
      gap-4 xs:gap-5 sm:gap-6 
      w-full 
      min-h-[200px] xs:min-h-[240px] sm:min-h-[280px]
      ${isLast ? 'bg-transparent' : 'bg-white'} rounded-xl
      transition-all duration-300 ease-in-out
      ${
        isLast
          ? ''
          : 'hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1'
      }
      cursor-pointer
    `}
    >
      <div
        className={`flex flex-row ${
          isLast ? 'justify-center' : 'items-start'
        } w-full gap-2.5`}
      >
        <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14">
          <Image
            src={`/assets/images/${icon}.svg`}
            alt={title}
            width={56}
            height={56}
            className={`w-full h-full ${
              isLast ? 'text-white' : 'text-purple-500'
            }`}
          />
        </div>
      </div>
      <div
        className={`flex flex-col ${
          isLast ? 'items-center' : 'items-start'
        } gap-2 xs:gap-3 w-full`}
      >
        <h3
          className={`
          font-dm-sans font-extrabold 
          text-lg xs:text-xl sm:text-2xl 
          leading-[1.4] tracking-[0.02em] 
          ${isLast ? 'text-center text-white' : 'text-left'}
        `}
        >
          {title}
        </h3>
        <p
          className={`
          font-dm-sans font-normal 
          text-xs xs:text-sm sm:text-base 
          leading-[150%] 
          ${isLast ? 'text-center text-white' : 'text-left'}
        `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: 'server-network',
      title: 'Unified Multi-Network Analysis',
      description:
        'Analyze assets across multiple networks and tokens within a single, integrated canvas.',
    },
    {
      icon: 'brackets-curly',
      title: 'Cross-Chain Network Support',
      description:
        'Monitor your portfolio performance with live updates and comprehensive analytics.',
    },
    {
      icon: 'wallet',
      title: 'Wallet Overview and Insights',
      description:
        'Connect your wallets and accounts with enterprise-grade security protocols.',
    },
    {
      icon: 'bolt-alt',
      title: 'Real-Time Wallet Monitoring',
      description:
        'Deep dive into detailed metrics and customizable reporting tools.',
    },
    {
      icon: 'cloud-computing',
      title: 'Address PathFinder',
      description:
        'Experience seamless performance with our optimized infrastructure.',
    },
    {
      icon: 'u_plus',
      title: '',
      description: 'Stay Tuned More',
    },
  ];

  return (
    <section id="features-section" className="w-full py-12 xs:py-16 sm:py-24">
      <div className="max-w-[1296px] mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-center items-center mb-8 xs:mb-10 sm:mb-12">
          <h2
            className="font-dm-sans font-extrabold 
            text-xl xs:text-2xl sm:text-[26px] 
            leading-[1.3] xs:leading-[1.4] sm:leading-[41px] 
            tracking-[0.02em] text-center text-white"
          >
            Our Features
          </h2>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="w-full max-w-[372px] mx-auto">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isLast={index === features.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
