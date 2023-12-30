/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Filter({ children, active }) {
  return (
    <Fragment>
      <div className={`h-auto `} >
        {active ?
          (<span className="font-600 px-4 py-3 text-filter_green text-[1rem] leading-24 bg-bg_green hover:opacity-75 rounded  ">
            {children}
          </span>)
          :
          (<span className="font-title px-4 py-3  text-lite_blue text-[1rem] leading-24  hover:opacity-75 rounded  ">
            {children}
          </span>)}
      </div>
    </Fragment>
  );
}
