/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/asset";
import WhiteButton from "./buttons/WhiteButton";
import CourseCard from "./cards/CourseCard";
import Filter from "../shared/typography/Filter";
import Subtitle from "../shared/typography/SubHeading";
import Title from "../shared/typography/Title";

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
            {props.btn != "" || null ? <Link to="/PATH_CATEGORIES_PATH"><WhiteButton>{props.btn}</WhiteButton> </Link> : null}
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
          <Link to="/course-details">
            <CourseCard
              title='All In One - 2023 BCS Preparation Model test Bundle set.'
              price='199.00'
              img={assets.course1}>
            </CourseCard>
          </Link>

          <Link to="/course-details">
            <CourseCard
              title='All In One - 2023 BCS Preparation Model test Bundle set.'
              price='199.00'
              img={assets.course2}>
            </CourseCard>
          </Link>

          <Link to="/course-details">
            <CourseCard
              title='All In One - 2023 BCS Preparation Model test Bundle set.'
              price='199.00'
              img={assets.course3}>
            </CourseCard>
          </Link>

          <Link to="/course-details">
            <CourseCard
              title='All In One - 2023 BCS Preparation Model test Bundle set.'
              price='199.00'
              img={assets.course4}>
            </CourseCard>
          </Link>

          <Link to="/course-details">
            <CourseCard
              title='All In One - 2023 BCS Preparation Model test Bundle set.'
              price='199.00'
              img={assets.course5}>
            </CourseCard>
          </Link>

          <Link to="/course-details">
            <CourseCard
              title='All In One - 2023 BCS Preparation Model test Bundle set.'
              price='199.00'
              img={assets.course6}>
            </CourseCard>
          </Link>

        </div>
      </section>
    </Fragment>
  );
}
