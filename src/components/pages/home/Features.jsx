import { Fragment } from "react";
import FeatureCard from "../../ui/cards/FeatureCard";
import Heading from "../../ui/headings/Heading";
import assets from "../../../assets/asset";
import { Typography } from "@/components/shared/typography";

export default function Features() {
  return (
    <Fragment>
      <section className="page-container featured-section  w-full py-[8rem] flex flex-col justify-center text-center">
        <div className="title text-center">
          <div className="feature">
            <span className="font-title text-[1rem] leading-24 text-natural hover:opacity-75">
              Features
            </span>
          </div>

          <Typography.SubHeading>Why give exam on </Typography.SubHeading>
          <Typography.SubHeading className="text-primary">Model</Typography.SubHeading>
          <Typography.SubHeading>Test</Typography.SubHeading>
        </div>

        <div className="cards pt-[6rem] grid grid-cols-3 gap-x-6 gap-y-16 w-full">
          <FeatureCard
            src={assets.diamond}
            title="Realistic Exam Simulations"
            details="Experience the exam environment with our authentic, timed model tests for enhanced readiness."
          ></FeatureCard>
          <FeatureCard
            src={assets.chartPi}
            title="Comprehensive Ques Bank"
            details="Access a vast array of questions covering every topic, allowing for thorough exam preparation."
          ></FeatureCard>
          <FeatureCard
            src={assets.circularCheck}
            title="Verified By Experts"
            details="Rely on assessments crafted and validated by experts, ensuring precision and relevance in your exam preparation."
          ></FeatureCard>
          <FeatureCard
            src={assets.userGear}
            title="Performance Analysis"
            details="Receive feedback and detailed insights to identify strengths and areas for improvement."
          ></FeatureCard>
          <FeatureCard
            src={assets.handFist}
            title="Access Anytime, Anywhere"
            details="Flexibility to practice at your convenience, whether at home or on the go, via our online platform."
          ></FeatureCard>
          <FeatureCard
            src={assets.pokerChip}
            title="Detailed Explanations"
            details="Understand the rationale behind each answer with comprehensive explanations for better comprehension."
          ></FeatureCard>
        </div>
      </section>
    </Fragment>
  );
}
