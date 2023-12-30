/* eslint-disable react/prop-types */
import { Fragment } from "react";


export default function Subtitle({ children, ...rest }) {
  return (
    <Fragment>
      <span className={`font-title font-lato text-lite_blue text-[1rem] leading-24  hover:opacity-75 rounded`}
        {...rest}>
        {children}
      </span>
    </Fragment>
  )
}
