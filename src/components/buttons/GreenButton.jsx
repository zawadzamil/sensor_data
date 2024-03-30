/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";


export default function GreenButton({ children, className }) {


  return (
    <button
      className={twMerge("leading-24 rounded h-[3rem] bg-title_green px-[24px] py-[8px] font-600 text-16p text-white tracking-[0.5px]", className)}
    >
      {children}
    </button>
  );
}

