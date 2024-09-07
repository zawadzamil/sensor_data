import Img from '@/components/shared/Img';
import { Typography } from '@/components/shared/typography';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function FeatureCard({ src, title, details }) {

  return (
    <Fragment>
      <div className="feature-card flex relative gap-4  w-full  ">
        <div className="icon">
          <Img src={src} alt="Icon" className="h-[3rem] w-[3rem] min-w-[3rem]" />
        </div>
        <div className="text flex flex-col justify-start text-left">
          <div className="title">
            <Typography.Text className="text-[24px] word-wrap: break-word font-bold">{title}</Typography.Text>
          </div>
          <div className="details">
            <Typography.Text className="w-full text-neutral-light">{details}</Typography.Text>
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
