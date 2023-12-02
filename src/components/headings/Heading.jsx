import PropTypes from "prop-types";
import { Fragment } from "react";

export default function Heading({ text, size,color }) {
  const textSize = size ? size : "text-5xl";
  const colorStyle = color?color : "text-title_green"
  return (
    <Fragment>
      <span className={`${colorStyle} ${textSize} font-bold font-lato`}>
        {text}
      </span>
    </Fragment>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};
