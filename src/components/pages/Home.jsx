// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import Category from "../ui/Catrgory";
import ModelTest from "../ui/ModelTest";
import BecomeExaminer from "./home/BecomeExaminer";
import Features from "./home/Features";
import Hero from "./home/Hero";
import Subtitle from "../shared/typography/SubHeading";
import Title from "../shared/typography/Title";

export default function Home() {
  return (
    <Fragment>
      <Hero></Hero>
      <Features></Features>
      <ModelTest
        top={`pt-[6rem]`}
        subtitle="POPULAR COURSES"
        title="Give exam on the Trending Model-Tests."
        details=""
        btn="">
      </ModelTest>
      <Category
        subtitle={<Subtitle>Top PATH_CATEGORIES_PATH</Subtitle>}
        title={<Title>Top PATH_CATEGORIES_PATH</Title>}
      >
      </Category>

      <ModelTest
        top={`pt-[5rem]`}
        subtitle="100% Free"
        title="Get Bank job-ready for an in-demand career"
        details="Gain the skills and confidence needed to stand out in the competitive job market and embark on a successful journey toward an in-demand banking career."
        btn="Explore All">
      </ModelTest>

      <BecomeExaminer></BecomeExaminer>

      <ModelTest
        top={`p-[6.25rem] `}
        subtitle="Top Rated Tests"
        title="Explore Top Model Test Exams"
        details="Dive into our curated selection of top-tier model tests, meticulously designed to elevate your preparation."
        btn="Explore All">
      </ModelTest>



    </Fragment>
  );
}
