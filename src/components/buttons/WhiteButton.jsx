import { twMerge } from "tailwind-merge";


export default function WhiteButton({ children, className }) {

  return (
    <button
      className={twMerge("tracking-[0.5px] leading-24 border h-[3rem] border-title_green rounded bg-transparent px-[24px] py-8px font-600 text-16p text-title_green", className)}
    >
      {children}
    </button>
  );
}
