/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Filter({ children, ...rest }) {
  return (
    <Fragment>
      <div className={`h-auto px-4 py-2`} {...rest}>
        <span className="font-title text-[1rem] leading-24  hover:opacity-75 rounded  ">
          {children}
        </span>
      </div>
    </Fragment>
  );
}
