import React from 'react';
import { twMerge } from 'tailwind-merge';

const Heading = ({ children, className }) => {
  return (
    <>
      <span className={twMerge('font-bold text-3xl text-natural', className)}>
        {children}
      </span>
    </>
  );
};

export default Heading;
