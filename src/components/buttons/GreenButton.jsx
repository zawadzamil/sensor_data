import PropTypes from "prop-types";

export default function GreenButton({ title, py }) {
  const paddding = py ? py : "8px";

  return (
    <button
      className={`nav-item leading-24 rounded bg-title_green px-[24px] py-${paddding} font-600 text-16p text-white tracking-[0.5px]`}
    >
      {title}
    </button>
  );
}

GreenButton.propTypes = {
  title: PropTypes.string.isRequired,
  py: PropTypes.string,
};
