import React from 'react';

const tokens = [
  { name: 'BTC', icon: '/assets/images/BTC.svg' },
  { name: 'ETH', icon: '/assets/images/ETH.svg' },
  { name: 'TRX', icon: '/assets/images/TRX.svg' },
  { name: 'USDC', icon: '/assets/images/USDC.svg' },
  { name: 'USDT', icon: '/assets/images/USDT.svg' },
];

const SupportedTokens: React.FC = () => {
  return (
    <section className="
      flex flex-col items-center
      px-4 sm:px-6 md:px-8 lg:px-12
      py-12 sm:py-16 md:py-16 lg:py-16
      gap-8 sm:gap-12 lg:gap-24
      w-full
      max-w-[1440px]
      mx-auto
    ">
      <div className="
        flex flex-col
        justify-center items-center
        py-2
        w-full
      ">
        <h2 className="
          font-dm-sans font-light
          text-lg sm:text-xl md:text-2xl lg:text-[26px]
          leading-[41px]
          text-center
          tracking-[0.12em]
          uppercase
          text-[#B783E4]
        ">
          supported tokens and networks
        </h2>
      </div>

      <div className="
        flex flex-row
        items-center
        justify-center
        flex-wrap
        gap-8 sm:gap-12 md:gap-16 lg:gap-32
        w-full
        max-w-[872px]
      ">
        {tokens.map((token) => (
          <div 
            key={token.name}
            className="
              w-12 h-12
              sm:w-16 sm:h-16
              md:w-20 md:h-20
              lg:w-[72px] lg:h-[72px]
              relative
              transition-transform
              duration-300
              hover:scale-110
            "
          >
            <img
              src={token.icon}
              alt={`${token.name} icon`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportedTokens;
