import PropTypes from "prop-types";
import { Fragment } from "react";
import Heading from "../headings/Heading";

export default function FeatureCard({ src, title, details }) {
  return (
    <Fragment>
      <div className="feature-card flex relative gap-4  w-full  ">
        <div className="icon">
          <img
            src={src}
            alt="Icon"
            className="h-[3rem] w-[3rem] min-w-[3rem]"
          />
        </div>
        <div className="text flex flex-col justify-start text-left">
          <div className="title">
            <Heading
              text={`${title}`}
              style={`word-wrap: break-word text-[1.2rem] text-natural`}
            ></Heading>
          </div>
          <div className="details">
            <span className=" w-full font-lato text-[1rem] leading-5 text-lite_blue ">
              {details}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
FeatureCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  details: PropTypes.string,
};
