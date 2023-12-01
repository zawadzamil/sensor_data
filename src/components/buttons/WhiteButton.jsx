import PropTypes from "prop-types";

export default function WhiteButton(props) {
  return (
    <button className="nav-item tracking-[0.5px] leading-24 border border-title_green rounded bg-white px-[24px] py-[8px] font-600 text-16 text-title_green">
      {props.title}
    </button>
  );
}

WhiteButton.propTypes = {
  title: PropTypes.string.isRequired,
};
