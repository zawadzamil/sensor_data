import PropTypes from "prop-types";

export default function WhiteButton(props) {
  const py = props.py ? "16px" : "8px";
  return (
    <button
      className={`nav-item tracking-[0.5px] leading-24 border border-title_green rounded bg-transparent px-[24px] py-[${py}] font-600 text-16p text-title_green`}
    >
      {props.title}
    </button>
  );
}

WhiteButton.propTypes = {
  title: PropTypes.string.isRequired,
  py: PropTypes.string,
};
