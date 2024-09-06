'use client';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Img = ({
  src,
  alt,
  className = '',
  width,
  height,
  layout = 'responsive',
  objectFit = 'cover',
  isProfile = false,
  ...rest
}) => {
  const [error, setError] = React.useState(false);
  const placeholderSrc = isProfile ? '' : '';

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={twMerge('relative w-full h-auto', className)}>
      <Image
        src={error ? placeholderSrc : src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit}
        className="rounded-lg"
        onError={handleError}
        {...rest}
      />
    </div>
  );
};

export default Img;
