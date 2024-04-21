import { Fragment } from "react";
import { Link } from "react-router-dom";
import GreenButton from "../components/buttons/GreenButton";
import WhiteButton from "../components/buttons/WhiteButton";
import Question from "../components/model-test/Question";
import Subtitle from "../components/texts/Subtitle";
import Title from "../components/texts/Title";



export default function ModelTest() {
    return (
        <Fragment>
            <section className="myContainer py-14 bg-bg_green_fade">
                <Title>Test 1</Title>
                <div className="details mt-6 flex justify-between">
                    <div className="left w-4/12">
                        <div className="flex items-center justify-between">
                            <Subtitle className="text-natural  mr-2 text-md ">Total Questions :
                                <span className="font-bold ms-2">50</span>
                            </Subtitle>
                            <span className="text-line base_thin">|</span>
                            <Subtitle className="text-natural base_thin ml-2">Total Points :
                                <span>100</span>
                            </Subtitle>
                        </div>
                    </div>

                    <div className="right w-6/12 text-right">
                        <Subtitle>
                            Time Remaining : <span className="text-red_base font-bold ms-1">01: 20 : 35</span>
                        </Subtitle>
                    </div>
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
                <Question></Question>
                <Question></Question>
                <Question></Question>

                <div className="buttons mt-14">
                    <div className="buttons_right flex justify-end gap-6">
                        <Link to='/purchased-details-course'>
                            <WhiteButton className="base_semibold px-12">Cancel</WhiteButton>
                        </Link>
                        <Link to='/result'>
                            <GreenButton className="base_semibold px-12">Submit</GreenButton>
                        </Link>
                    </div>
                </div>
            </section>


        </Fragment>
    )
}
