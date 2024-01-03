/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Heading({ text, style }) {
  const customStyles = style ? style : "";
  return (
    <Fragment>
      <span className={`${customStyles} font-bold font-lato`}>
        {text}
      </span>
    </Fragment>
  );
}

