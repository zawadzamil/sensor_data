import { Button } from 'antd';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Outline = ({ className, buttonType = 'default', children, ...props }) => {
  return (
    <Button
      className={twMerge('!px-6 !py-3 overflow-hidden', className)}
      type={buttonType}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Outline;
