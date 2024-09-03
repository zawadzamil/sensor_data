import { Fragment } from "react";
import assets from "../assets/asset";
import Test from "../ui/Purched Details Course/Test";
import Title from "../shared/typography/Title";

export default function PurchaseDetailsCourse() {
  return (
    <Fragment>
      {/* Banner */}
      <section className="myContainer banner py-[68px] bg-natural_bg_green flex justify-between">
        <div className="">
          {/* Breedcrumbs */}
          <div className="breedcrumb">
            <div className="text-sm breadcrumbs">
              <ul>
                <li className="text-fade_blue base_bold capitalize"><a>Home</a></li>
                <li className="text-fade_blue base_bold capitalize"><a>Documents</a></li>
                <li className="text-fade_blue base_bold capitalize">Add Document</li>
              </ul>
            </div>
          </div>
          <Title className="mt-4 text-5xl">BCS Exam Prep Test -2023</Title>
          <div className="detiled_info mt-8">
            <ul className=" flex gap-12">
              <li>
                <span className="base-normal text-fade_blue">Total Enrolled :</span>
                <span className="base_semibold text-natural">200 Students</span>
              </li>

              <li>
                <span className="base-normal text-fade_blue">Total No of Tests :</span>
                <span className="base_semibold text-natural">5</span>
              </li>

              <li>
                <span className="base-normal text-fade_blue">Total Bundle Points :</span>
                <span className="base_semibold text-natural">500</span>
              </li>

            </ul>
          </div>
        </div>
        {/* Leaderboard */}
        <div className="leaderboard">
          <Title className="text-3xl">Points Leaderboard</Title>
          <div className="list mt-6 ms-2 text-natural base_thin flex flex-col gap-3">
            <div className="flex gap-3 text-natural base_thin">
              <div className="sl">1.</div>
              <div className="name w-20">Zawad</div>
              <div className="point w-14">420</div>
            </div>

            <div className="flex gap-3 text-natural base_thin">
              <div className="sl">2.</div>
              <div className="name w-20">Sadman</div>
              <div className="point w-14">400</div>
            </div>

            <div className="flex gap-3 text-natural base_thin">
              <div className="sl">3.</div>
              <div className="name w-20">Aladin</div>
              <div className="point w-14">320</div>
            </div>

            <div className="flex gap-3 text-green-500 base_thin">
              <div className="sl">14.</div>
              <div className="name w-20">You</div>
              <div className="point w-14">69</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tests */}
      <section className="myContainer mt-16 mb-24">
        <div className="tests flex flex-col gap-5">
          <Test complete={true}
            title="Test 01 - Bangla"
            img={assets.course2}
            totalQuestions={50}
            totalPoints={100}
            attampts={2}
            duration="01:15:00"></Test>

          <Test complete={true}
            title="Test 02 - English"
            img={assets.course4}
            totalQuestions={30}
            totalPoints={100}
            attampts={5}
            duration="01:15:00"></Test>

          <Test complete={false}
            title="Test 3 - Social Science"
            img={assets.course2}
            totalQuestions={50}
            totalPoints={100}
            attampts={2}
            duration="01:15:00"></Test>

          <Test complete={false}
            title="Test 4 - Social Science"
            img={assets.course4}
            totalQuestions={20}
            duration="01:15:00"
          ></Test>

          <Test complete={false}
            title="Test 5 - Social Science"
            img={assets.course5}
            totalQuestions={20}
            duration="01:15:00"
          ></Test>

        </div>
      </section>
    </Fragment>
  )
}
