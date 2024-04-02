/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";


export default function Subtitle({ children, className }) {
  return (
    <Fragment>
      <span className={twMerge("font-title font-lato text-lite_blue text-[1rem] leading-24  hover:opacity-75 rounded", className)}>
        {children}
      </span>
    </Fragment>
  )
}
