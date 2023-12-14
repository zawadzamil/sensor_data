// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import ModelTest from "../components/ModelTest";
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
        subtitle={<Subtitle className="text-lite_blue">Popular Tests</Subtitle>}
        title={<Title>Give exam on the Trending Model-Tests.</Title>}
    
      ></ModelTest>
    </Fragment>
  );
}
