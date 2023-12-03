import { Fragment } from "react";
import assets from "../../assets/asset";
import GreenButton from "../buttons/GreenButton";
import WhiteButton from "../buttons/WhiteButton";
import Heading from "../headings/Heading";

export default function Hero() {
  return (
    <Fragment>
      <div className=" hero w-full h-[720px]  flex flex-col items-center ">
        {/* Text Section */}
        <div className="w-full text-center justify-center ps-[10rem] pe-[3rem] pt-[182px] flex gap-0 relative">
          <div className="heading ps-4">
            <Heading text="Exam Mastery Hub: " style="text-5xl text-title_green"></Heading>
            <Heading text="Master Your Exams with our Online Model Tests" style="text-5xl text-natural" ></Heading>
          </div>
          <div className="-rotate-360 w-36 h-28 relative translate-x-[-2.5rem] mt-2">
            <img src={assets.cloud} alt="" className="absolute top-0" />
          </div>
        </div>
        {/* Subtitle Section */}
        <div className="subtitle w-full text-center px-[7rem] font-lato text-[24px] capitalize leading-normal">
          <p>
            Sharpen your skills and elevate your success through realistic
            online model tests.
          </p>
        </div>
        {/* Button Section */}
        <div className="buttons mt-16 flex justify-center items-center gap-4">
          <GreenButton >View Model Tests</GreenButton>
          <WhiteButton  >Explore Categories</WhiteButton>
        </div>

        {/* Cloud Section */}
        <div className="cloud relative flex-item ml-auto">
          <img
            src={assets.floatingCloud}
            alt=""
            className="w-[180px] h-[53px] mr-28 mt-20"
          />
        </div>
      </div>
    </Fragment>
  );
}
