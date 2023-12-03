/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export default function WhiteButton({children}) {

  return (
    <button
      className={`nav-item tracking-[0.5px] leading-24 border border-title_green rounded bg-transparent px-[24px] py-8px font-600 text-16p text-title_green`}
    >
      {children}
    </button>
  );
}

WhiteButton.propTypes = {
  title: PropTypes.string.isRequired
};
