import { Fragment } from "react";
import Subtitle from "../components/texts/Subtitle";
import Title from "../components/texts/Title";

export default function ModelTest() {
    return (
        <Fragment>
            <section className="myContainer py-14 bg-bg_green_fade">
                <Title>Test 1</Title>
                <div className="details mt-6 flex justify-between">
                    <div className="left w-4/12">
                        <div class="flex items-center justify-between">
                            <Subtitle class="text-natural  mr-2 text-md ">Total Questions :
                                <span className="font-bold ms-2">50</span>
                            </Subtitle>
                            <span class="text-line base_thin">|</span>
                            <Subtitle class="text-natural base_thin ml-2">Total Points :
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

            <section className="myContainer mt-16">
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
                <div className="question mt-9 px-9 py-8">
                    <div className="q_title flex justify-between items-center">
                        <h3 className="base_bold">What is the capital of Bangladesh?</h3>
                        <h3 className="base_thin">Points : <span className="font-bold"> 2</span></h3>
                    </div>

                    {/* Options */}
                    <div className="options flex flex-col gap-4 mt-6">
                        <div className="option flex items-center gap-3">
                            <input type="radio" id="radio1" name="radio" className="radio radio-sm checked:bg-gray-500" />
                            <label for="radio1" className="base_semibold">Dhaka</label>
                        </div>
                        <div className="option flex items-center gap-3">
                            <input type="radio" id="radio2" name="radio" className="radio radio-sm checked:bg-gray-500" />
                            <label for="radio2" className="base_semibold">Dhaka</label>
                        </div>
                        <div className="option flex items-center gap-3">
                            <input type="radio" id="radio3" name="radio" className="radio radio-sm checked:bg-gray-500" />
                            <label for="radio3" className="base_semibold">Dhaka</label>
                        </div>
                        <div className="option flex items-center gap-3">
                            <input type="radio" id="radio4" name="radio" className="radio radio-sm checked:bg-gray-500" />
                            <label for="radio4" className="base_semibold">Dhaka</label>
                        </div>

                    </div>

                </div>
            </section>
        </Fragment>
    )
}
