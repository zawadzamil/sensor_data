import { Fragment } from "react";
import Title from "../components/header/Title";
import Subtitle from "../components/texts/Subtitle";

export default function ModelTest() {
    return (
        <Fragment>
            <section className="myContainer py-14">
                <Title>Test 1</Title>
                <div className="details">
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
                </div>
            </section>
        </Fragment>
    )
}
