/* eslint-disable react/prop-types */
import { Fragment } from "react";
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

        <div className="filter pt-[2.25rem]  flex gap-4">
          <Filter className={`bg-bg_green text-filter_green`}>BCS</Filter>
          <Filter className={` text-lite_blue`}>Bank Jobs</Filter>
          <Filter className={` text-lite_blue`}>Admission Exam</Filter>
        </div>
      </section>
    </Fragment>
  );
}
