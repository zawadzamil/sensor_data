
import { twMerge } from "tailwind-merge";


export default function Title({ children, className }) {
  return (
    <span className={twMerge("font-bold font-lato text-[2.25rem] text-natural", className)}>
      {children}
    </span>
  )
}
