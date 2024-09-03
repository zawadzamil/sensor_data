import { Fragment } from "react";
import assets from "../assets/asset";
import PurchaseBundle from "../ui/cards/PurchaseBundle";
import Title from "../shared/typography/Title";

export default function PurchesedBundles() {
    return (
        <Fragment>
            <section className="myContainer mt-20 mb-28">
                <div className=" title w-full  border-b-2  py-4 px-2">
                    <Title className="py-5 text-[2rem] ">My Purchased Bundles</Title>
                </div>

                {/* Bundles */}
                <div className="bundles mt-12 flex flex-col gap-10">


                    <PurchaseBundle title="BCS Preparation Exam 2023"
                        details="A website is much more than a group of pages connected by links. It’s an interface, space where different things meet, communicate, and affect each other."
                        progress={100}
                        img={assets.course4}
                    ></PurchaseBundle>

                    <PurchaseBundle title="BCS Preparation Exam 2023"
                        details="A website is much more than a group of pages connected by links. It’s an interface, space where different things meet, communicate, and affect each other."
                        progress={30}
                        img={assets.course5}
                    ></PurchaseBundle>

                    <PurchaseBundle title="BCS Preparation Exam 2023"
                        details="A website is much more than a group of pages connected by links. It’s an interface, space where different things meet, communicate, and affect each other."
                        progress={50}
                        img={assets.course6}
                    ></PurchaseBundle>


                </div>
            </section>
        </Fragment>
    )
}
