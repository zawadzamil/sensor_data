import { Button } from 'antd';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Primary = ({ className, children, ...props }) => {
  return (
    <Button type="primary" {...props} className={twMerge('!px-6 !py-3 overflow-hidden', className)}>
      {children}
    </Button>
  );
};

export default Primary;
