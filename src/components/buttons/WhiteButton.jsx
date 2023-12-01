import PropTypes from "prop-types";

export default function WhiteButton({title, py}) {
  const paddding = py ? py : "8px";
  return (
    <button
      className={`nav-item tracking-[0.5px] leading-24 border border-title_green rounded bg-transparent px-[24px] py-${paddding} font-600 text-16p text-title_green`}
    >
      {title}
    </button>
  );
}

WhiteButton.propTypes = {
  title: PropTypes.string.isRequired,
  py: PropTypes.string,
};
