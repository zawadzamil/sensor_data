import { Fragment } from "react";
import asset from "../../assets/asset";
import FeatureCard from "../cards/FeatureCard";
import Heading from "../headings/Heading";

export default function Features() {
  return (
    <Fragment>
      <section className="featured-section  w-full py-[8rem] px-[20rem]  flex flex-col justify-center text-center">
        <div className="title text-center">
          <div className="feature">
            <span className="font-title text-[1rem] leading-24 text-natural hover:opacity-75">
              Features
            </span>
          </div>
          <Heading
            text="Why give exam on "
            style={`text-[2.25rem] text-natural`}
          ></Heading>
          <Heading
            text="Model"
            style={`text-[2.25rem] text-lite_green`}
          ></Heading>
          <Heading text="Test" style={`text-[2.25rem] text-natural`}></Heading>
        </div>

        <div className="cards pt-[6rem] grid grid-cols-3 gap-[1.5rem] w-full">
          <FeatureCard
            src={asset.diamond}
            title="Realistic Exam Simulations"
            details="Experience the exam environment with our authentic, timed model tests for enhanced readiness."
          ></FeatureCard>
          <FeatureCard
            src={asset.chartPi}
            title="Comprehensive Ques Bank"
            details="Access a vast array of questions covering every topic, allowing for thorough exam preparation."
          ></FeatureCard>
          <FeatureCard
            src={asset.circularCheck}
            title="Verified By Experts"
            details="Rely on assessments crafted and validated by experts, ensuring precision and relevance in your exam preparation."
          ></FeatureCard>
          <FeatureCard
            src={asset.userGear}
            title="Performance Analysis"
            details="Receive feedback and detailed insights to identify strengths and areas for improvement."
          ></FeatureCard>
          <FeatureCard
            src={asset.handFist}
            title="Access Anytime, Anywhere"
            details="Flexibility to practice at your convenience, whether at home or on the go, via our online platform."
          ></FeatureCard>
          <FeatureCard
            src={asset.pokerChip}
            title="Detailed Explanations"
            details="Understand the rationale behind each answer with comprehensive explanations for better comprehension."
          ></FeatureCard>
        </div>
      </section>
    </Fragment>
  );
}
