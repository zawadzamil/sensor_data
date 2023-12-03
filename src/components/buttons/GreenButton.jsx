/* eslint-disable react/prop-types */


export default function GreenButton({ children , ...rest}) {
  

  return (
    <button
      className={`nav-item leading-24 rounded bg-title_green px-[24px] py-[8px] font-600 text-16p text-white tracking-[0.5px]`}
      {...rest}
    >
      {children}
    </button>
  );
}

