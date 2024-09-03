import React from 'react';

const layout = ({ children }) => {
  return (
    <div>
      <div className="bg-neutral-extra-lite h-screen w-full flex justify-center items-center">
        <div className="bg-white w-[25%] px-[68px] py-12 rounded-lg">{children}</div>
      </div>
    </div>
  );
};

export default layout;
