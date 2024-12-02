import React from 'react';

import config from '../config/index.json';

const Footer: React.FC = () => {
  const { footer } = config;

  return (
    <footer className="w-full py-4 px-12 z-10">
      <hr className="border-t border-gray-400 mx-auto" />

      <div className="mt-2">
        <p
          className="text-basic-white font-dm-sans text-[14px] font-light text-left"
          style={{ lineHeight: '160%' }}
        >
          {footer.message}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
