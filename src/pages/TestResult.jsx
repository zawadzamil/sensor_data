import { Fragment } from "react";
import GreenButton from "../components/buttons/GreenButton";
import WhiteButton from "../components/buttons/WhiteButton";
import Question from "../components/model-test/Question";
import ResultQuestion from "../components/model-test/ResultQuestion";
import Subtitle from "../components/texts/Subtitle";
import Title from "../components/texts/Title";



export default function TestResult() {
    return (
        <Fragment>
            <section className="myContainer py-14 bg-bg_green_fade">
                <div className="title flex justify-between">
                    <Title>Test 1</Title>
                    <Subtitle className="">Test 1</Subtitle>
                </div>
                <div className="details mt-6 flex justify-between">
                    <Subtitle className="text-natural  mr-4 text-md ">Total Questions :
                        <span className="font-bold ms-2">50</span>
                    </Subtitle>

                    <span className="text-line base_thin">|</span>

                    <Subtitle className="text-natural base_thin ">Correct Answers :
                        <span className="text-title_green font-bold ms-2 "> 30</span>
                    </Subtitle>

                    <span className="text-line base_thin">|</span>

                    <Subtitle className="text-natural base_thin  ">Wrong Answers :
                        <span className="text-red_base font-bold ms-2 "> 10</span>
                    </Subtitle>

                    <span className="text-line base_thin">|</span>

                    <Subtitle className="text-natural base_thin  ">Time Taken :
                        <span className="text-blue-600 font-bold ms-2 "> 01: 20 : 35 :</span>
                    </Subtitle>

                    <span className="text-line base_thin">|</span>

                    <Subtitle className="text-natural base_thin  ">Total Points :
                        <span className=" font-bold ms-2 "> 100</span>
                    </Subtitle>
                </div>
            </section>

            <section className="myContainer mt-16 h-fit mb-24 ">
                {/* Title */}
                <div className="title px-6 py-3 flex bg-fade_white justify-between rounded-t-md">
                    <div className="name">
                        <Subtitle>Section 1:
                            <span className="text-natural font-600 ms-1">Bangla</span>
                        </Subtitle>
                    </div>

                    <div className="questions">
                        <Subtitle>Question : 1 to 5</Subtitle>
                    </div>
                </div>
                <ResultQuestion correct={false}
                    point={0}></ResultQuestion>
                <Question></Question>
                <Question></Question>

                <div className="buttons mt-14">
                    <div className="buttons_right flex justify-end gap-6">
                        <WhiteButton className="base_semibold px-12">Cancel</WhiteButton>
                        <GreenButton className="base_semibold px-12">Submit</GreenButton>
                    </div>
                </div>
            </section>


        </Fragment>
    )
}
