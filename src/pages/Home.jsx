// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import Category from "../components/Catrgory";
import ModelTest from "../components/ModelTest";
import WhiteButton from "../components/buttons/WhiteButton";
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
        subtitle={<Subtitle >POPULAR COURSES</Subtitle>}
        title={<Title>Give exam on the Trending Model-Tests.</Title>}


      ></ModelTest>
      <Category top={`pt-[6rem]`}
        subtitle={<Subtitle>Top Categories</Subtitle>}
        title={<Title>Top Categories</Title>}
        btn={<WhiteButton>Explore All</WhiteButton>}
      >
      </Category>


    </Fragment>
  );
}
