import { Typography } from "@/components/shared/typography";
import { featureData } from "@/helpers/StaticData";
import { Fragment } from "react";
import FeatureCard from "../../ui/cards/FeatureCard";

export default function Features() {
  return (
    <Fragment>
      <section className="page-container featured-section  w-full py-[8rem] flex flex-col justify-center text-center">
        <div className="title text-center">
          <div className="feature">
            <span className="font-title text-[1rem] pb-4 leading-24 text-natural hover:opacity-75">
              Features
            </span>
          </div>

          <div className="flex justify-center">
            <Typography.SubHeading>Why give exam on </Typography.SubHeading>
            <Typography.SubHeading className="text-primary"> &nbsp; Model</Typography.SubHeading>
            <Typography.SubHeading>Test</Typography.SubHeading>
          </div>
        </div>

        <div className="cards pt-[6rem] grid grid-cols-3 gap-x-6 gap-y-16 w-full">

          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              src={feature.src}
              title={feature.title}
              details={feature.details}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
