import React from 'react';

const GradientRectangle: React.FC = () => {
  return (
    <div
      className="absolute -z-40"
      style={{
        width: '100%',
        height: '90vh',
        background:
          'linear-gradient(114.65deg, #8C59FA 13.83%, #1B0F2E 101.42%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
      }}
    ></div>
  );
};

export default GradientRectangle;
