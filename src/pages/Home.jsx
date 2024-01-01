// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import Category from "../components/Catrgory";
import ModelTest from "../components/ModelTest";
import WhiteButton from "../components/buttons/WhiteButton";
import BecomeExaminer from "../components/home/BecomeExaminer";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Subtitle from "../components/texts/Subtitle";
import Title from "../components/texts/Title";

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
      <Category top={`pt-[6rem]`}
        subtitle={<Subtitle>Top Categories</Subtitle>}
        title={<Title>Top Categories</Title>}
        btn={<WhiteButton>Explore All</WhiteButton>}
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
        top={`pt-[6.25rem]`}
        subtitle="Top Rated Tests"
        title="Explore Top Model Test Exams"
        details="Dive into our curated selection of top-tier model tests, meticulously designed to elevate your preparation."
        btn="Explore All">
      </ModelTest>


    </Fragment>
  );
}
