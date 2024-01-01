import { Fragment } from "react";
import assets from "../../assets/asset";
import GreenButton from "../buttons/GreenButton";
import Heading from "../headings/Heading";
import Subtitle from "../texts/Subtitle";


export default function BecomeExaminer() {
    return (
        <Fragment>
            <section className="myContainer py-[6.25rem] mt-[6.25rem] flex justify-between bg-natural_bg_green">
                <div className="text flex flex-col gap-6">
                    <Heading style={`text-natural text-5xl`} text="Become An Examiner"></Heading>
                    <Subtitle>Join one of the largest online Model Test giving platform.</Subtitle>
                    <div className="button mt-4">
                        <GreenButton>Become an Examiner</GreenButton>
                    </div>
                </div>
                <div className="images flex gap-5">
                    <div className="w-[15rem] h-[9.69rem] mt-32 ">
                        <figure>
                            <img src={assets.book} className="object-cover" alt="" />
                        </figure>
                    </div>
                    <div className="w-[10rem] h-[11rem] mt-8 ">
                        <figure>
                            <img src={assets.books} className="object-cover" alt="" />
                        </figure>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
