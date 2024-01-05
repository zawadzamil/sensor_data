import { Fragment } from "react";
import assets from "../assets/asset";
import RegularHeader from "../components/RegularHeader";
import Heading from "../components/headings/Heading";
import Rating from "../components/rating/Rating";
import FadeText from "../components/texts/FadeTexts";
import Filter from "../components/texts/Filter";
import Paragraph from "../components/texts/Paragraph";
import SmallTitle from "../components/texts/SmallTitle";
import Title from "../components/texts/Title";

export default function CourseDetails() {
    return (
        <Fragment>
            <section className="mb-20">
                <RegularHeader pageLink='/course-details'
                    page='Course Details'
                    title='Bundle Details'>
                </RegularHeader>
            </section>
            <section className="myContainer">
                <div className="content grid grid-cols-3 gap-[7.44rem]">
                    <div className="description flex flex-col gap-4 col-span-2">
                        {/* Bundel Details */}
                        <Filter active={true}>BCS</Filter>
                        <Title >BCS Exam Prep 2023 Edition</Title>
                        <div className="details ">
                            <table className="">
                                <tr className="flex">
                                    <td className="pe-4">
                                        <figure>
                                            <img src={assets.eclips} alt="teacher cover" className="object-cover rounded-full w-12 h-12" />
                                        </figure>
                                    </td>

                                    <td className="flex flex-col justify-start">
                                        <FadeText className='text-[0.875rem]'>Examiner</FadeText>
                                        <SmallTitle rest={'text-base'}>Cristofer Jonas</SmallTitle>
                                    </td>

                                    <td className="flex flex-col justify-start ms-10">
                                        <FadeText className='text-[0.875rem]'>Last Updated</FadeText>
                                        <SmallTitle rest={'text-base'}>28 January, 2022</SmallTitle>
                                    </td>
                                    <td className="flex flex-col justify-start ms-10">
                                        <FadeText className='text-[0.875rem]'>Review</FadeText>
                                        <Rating></Rating>
                                    </td>
                                    <td className="mt-auto pb-2 px-2">
                                        <SmallTitle rest={`text-[0.875rem]`}>4(2)</SmallTitle>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        {/* Bundel Image */}
                        <div className="image w-[40rem] h-[22.125rem] mt-2 mb-8">
                            <figure className="w-full h-full overflow-hidden">
                                <img
                                    src={assets.bundelCover}
                                    alt="Bundel Cover"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                        </div>

                        <div className="buttons flex gap-0">
                            <button className="btn rounded-none py-3 px-6 bg-base bg-deep_green text-white font-lato font-600 w-[13rem]">
                                Overview
                            </button>
                            <button className="btn rounded-none py-3 px-6 bg-base bg-white text-natural font-lato font-600 w-[13rem]">
                                Reviews
                            </button>
                        </div>
                        <div className="overview mt-6 flex flex-col gap-4">
                            <Heading text='Overview'
                                style={`text-[1.5rem] font-lite_blue`}></Heading>

                            <Paragraph>
                                Elevate your BCS exam preparation with our online model tests. Immerse yourself in a comprehensive and dynamic study experience tailored specifically for BCS examinations.<br /> <br /> Access realistic simulations, a rich question bank, and instant performance analysis to ensure you are ready to conquer the BCS exam with confidence. Sharpen your skills, track your progress, and embrace success with our dedicated BCS exam preparation platform.
                            </Paragraph>
                            <Heading text='What’s included inside the bundle?'
                                style={`text-[1.5rem] font-lite_blue mt-6`}></Heading>
                            <ul className="list-none">
                                <li className="flex gap-3">
                                    <div className="icon">

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
