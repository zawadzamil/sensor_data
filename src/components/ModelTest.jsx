/* eslint-disable react/prop-types */
import { Fragment } from "react";
import assets from "../assets/asset";
import WhiteButton from "./buttons/WhiteButton";
import CourseCard from "./cards/CourseCard";
import Filter from "./texts/Filter";
import Subtitle from "./texts/Subtitle";
import Title from "./texts/Title";

export default function ModelTest(props) {
  return (
    <Fragment>
      <section className={`myContainer w-full ${props.top}`}>
        <div className="top flex justify-between align-middle">
          <div className="text-area flex flex-col">
            <Subtitle>{props.subtitle}</Subtitle>
            <Title>{props.title}</Title>
          </div>
          <div className="button ">
            {props.btn != "" || null ? <WhiteButton>{props.btn}</WhiteButton> : null}
          </div>
        </div>
        <div className="details mt-4">
          <Subtitle>{props.details}</Subtitle>
        </div>
        {/* Filter */}
        <div className="filter pt-[2.25rem]  flex gap-4">
          <Filter active={true}>Design & Development</Filter>
          <Filter active={false}>SEO & Digital Marketing</Filter>
          <Filter active={false}>Video Editing</Filter>
          <Filter active={false}>Marketing</Filter>
        </div>

        {/* Cource Card */}
        <div className="course-card mt-12  grid grid-cols-3 gap-x-6  gap-y-16">
          <CourseCard
            title='All In One - 2023 BCS Preparation Model test Bundle set.'
            price='199.00'
            img={assets.course1}>
          </CourseCard>
          <CourseCard
            title='All In One - 2023 BCS Preparation Model test Bundle set.'
            price='199.00'
            img={assets.course2}>
          </CourseCard>
          <CourseCard
            title='All In One - 2023 BCS Preparation Model test Bundle set.'
            price='199.00'
            img={assets.course3}>
          </CourseCard>
          <CourseCard
            title='All In One - 2023 BCS Preparation Model test Bundle set.'
            price='199.00'
            img={assets.course4}>
          </CourseCard>
          <CourseCard
            title='All In One - 2023 BCS Preparation Model test Bundle set.'
            price='199.00'
            img={assets.course5}>
          </CourseCard>
          <CourseCard
            title='All In One - 2023 BCS Preparation Model test Bundle set.'
            price='199.00'
            img={assets.course6}>
          </CourseCard>


        </div>
      </section>
    </Fragment>
  );
}
