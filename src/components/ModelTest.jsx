/* eslint-disable react/prop-types */
import { Fragment } from "react";
import CourseCard from "./cards/CourseCard";
import Filter from "./texts/Filter";

export default function ModelTest(props) {
  return (
    <Fragment>
      <section className={`myContainer w-full ${props.top}`}>
        <div className="top flex justify-between align-middle">
          <div className="text-area flex flex-col">
            {props.subtitle}
            {props.title}
          </div>
          {props.btn}
        </div>
        {/* Filter */}
        <div className="filter pt-[2.25rem]  flex gap-4">
          <Filter active={true}>Design & Development</Filter>
          <Filter active={false}>SEO & Digital Marketing</Filter>
          <Filter active={false}>Video Editing</Filter>
          <Filter active={false}>Marketing</Filter>
        </div>

        {/* Cource Card */}
        <div className="course-card mt-12  grid grid-cols-3 gap-6">
          <CourseCard title='All In One - 2023 BCS Preparation Model test Bundle set.'></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>

        </div>
      </section>
    </Fragment>
  );
}
