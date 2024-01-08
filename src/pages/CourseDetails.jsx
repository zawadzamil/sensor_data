import { Fragment } from "react";
import assets from "../assets/asset";
import RegularHeader from "../components/RegularHeader";
import CategoryBadge from "../components/badges/CategoryBadge";
import IconBadge from "../components/badges/IconBadge";
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
                <div className="content grid grid-cols-3 gap-[7.44rem] lg:gap-16">
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
                        <div className="overview mt-6 flex flex-col gap-4 mb-16">
                            <Heading text='Overview'
                                style={`text-[1.5rem] font-lite_blue`}></Heading>

                            <Paragraph>
                                Elevate your BCS exam preparation with our online model tests. Immerse yourself in a comprehensive and dynamic study experience tailored specifically for BCS examinations.<br /> <br /> Access realistic simulations, a rich question bank, and instant performance analysis to ensure you are ready to conquer the BCS exam with confidence. Sharpen your skills, track your progress, and embrace success with our dedicated BCS exam preparation platform.
                            </Paragraph>
                            <Heading text='What’s included inside the bundle?'
                                style={`text-[1.5rem] font-lite_blue mt-6`}></Heading>
                            <ul className="list-none">
                                <li className="flex gap-3 pb-3">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M10.875 8.625L14.625 12L10.875 15.375" stroke="#474D66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <div className="text ">
                                        <Paragraph>
                                            <Heading text={`Comprehensive Subject Coverage: `}
                                                style={`text-base`}>
                                            </Heading>
                                            Gain insights into the specific subjects and topics that constitute the BCS exam, ensuring focused preparation.</Paragraph>
                                    </div>
                                </li>

                                <li className="flex gap-3 pb-3">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M10.875 8.625L14.625 12L10.875 15.375" stroke="#474D66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <div className="text ">
                                        <Paragraph>
                                            <Heading text={`Detailed Question Types: `}
                                                style={`text-base`}>
                                            </Heading>
                                            Understand the various question formats that may appear on the exam, allowing you to tailor your study approach accordingly.</Paragraph>
                                    </div>
                                </li>

                                <li className="flex gap-3 pb-3">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M10.875 8.625L14.625 12L10.875 15.375" stroke="#474D66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <div className="text ">
                                        <Paragraph>
                                            <Heading text={`Critical Exam Areas Highlighted: `}
                                                style={`text-base`}>
                                            </Heading>
                                            Identify key areas and concepts that are crucial for success, providing a roadmap for targeted and efficient preparation.</Paragraph>
                                    </div>
                                </li>

                                <li className="flex gap-3 pb-3">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M10.875 8.625L14.625 12L10.875 15.375" stroke="#474D66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <div className="text ">
                                        <Paragraph>
                                            <Heading text={`Strategic Insights for Success: `}
                                                style={`text-base`}>
                                            </Heading>
                                            Uncover strategies and tips to navigate the BCS exam effectively, ensuring confidence and competence on exam day.</Paragraph>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bundel-content flex flex-col gap-6 ">

                            <Heading text={`Bundel Content`}
                                style={`text-2xl`}></Heading>

                            {/* Accordion */}
                            <div className="accordion flex flex-col gap-6 mb-24">
                                <div className="collapse collapse-arrow rounded-none">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-base font-600 font-lato text-lite_green border-solid border  border-lite_green">
                                        Test 1: Bangla
                                    </div>
                                    <div className="collapse-content p-4 border-solid border border-lite_green border-t-0 flex justify-between">
                                        <div className="text">
                                            <span className="small_semibold text-lite_blue">Exam Duration: </span>

                                            <span className="small_semibold text-red_base ms-2"> 01:15:00</span>
                                        </div>

                                        <div className="playButton flex gap-[0.38rem] items-center">
                                            <div className="icon w-5 h-5">
                                                <img src={assets.PlayIcon} alt="PlayIcon" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="small_semibold text-deep_green font-bold">
                                                Start Test
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow rounded-none">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-base font-600 font-lato text-lite_green border-solid border">
                                        Test 2: English
                                    </div>
                                    <div className="collapse-content p-4 border-solid border border-t-0 flex justify-between">
                                        <div className="text">
                                            <span className="small_semibold text-lite_blue">Exam Duration: </span>

                                            <span className="small_semibold text-red_base ms-2"> 01:15:00</span>
                                        </div>

                                        <div className="playButton flex gap-[0.38rem] items-center">
                                            <div className="icon w-5 h-5">
                                                <img src={assets.PlayIcon} alt="PlayIcon" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="small_semibold text-deep_green font-bold">
                                                Start Test
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow rounded-none">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-base font-600 font-lato text-lite_green border-solid border ">
                                        Test 3: Math
                                    </div>
                                    <div className="collapse-content p-4 border-solid border border-t-0 flex justify-between">
                                        <div className="text">
                                            <span className="small_semibold text-lite_blue">Exam Duration: </span>

                                            <span className="small_semibold text-red_base ms-2"> 01:15:00</span>
                                        </div>

                                        <div className="playButton flex gap-[0.38rem] items-center">
                                            <div className="icon w-5 h-5">
                                                <img src={assets.PlayIcon} alt="PlayIcon" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="small_semibold text-deep_green font-bold">
                                                Start Test
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="details col-span-1 flex p-4 gap-4 flex-col">
                        <div className="image">
                            <figure>
                                <img src={assets.course1} alt="Course" className="w-full h-full object-cover" />
                            </figure>
                        </div>

                        <div className="price flex gap-4 items-center">
                            {/* Offer Price */}
                            <span className="large_bold text-natural">$246.00</span>

                            {/* Actual Price */}
                            <FadeText className={`text-2xl line-through decoration-gray-500`}>$300</FadeText>
                        </div>

                        <div className="cart_button w-full">
                            <button className="w-full bg-title_green px-[24px] py-[8px] rounded h-[3rem] font-600 text-16p text-white tracking-[0.5px]">
                                <img src={assets.ShopingCart} alt="Cart" className="w-4 h-4 object-cover inline mr-2" />

                                <span className="inline">Add to Cart</span>

                            </button>
                        </div>
                        <div className="semi_lerge_bold text-filter_green">
                            BCS Exam Prep 2023 Edition
                        </div>

                        <div className="courseDetails mt-2">
                            <div className="flex justify-between border py-4 px-2">
                                <IconBadge img={assets.UserSVG}
                                    title="Examiner"></IconBadge>

                                <span className="base_bold text-filter_green underline">Cristofer Jonas</span>
                            </div>
                            <div className="flex justify-between border border-t-0 py-4 px-2">
                                <IconBadge img={assets.RefreshSVG}
                                    title="Last Updated"></IconBadge>

                                <span className="base_bold text-filter_green ">28 January, 2022</span>
                            </div>

                            <div className="flex justify-between border border-t-0 py-4 px-2">
                                <IconBadge img={assets.TimeSVG}
                                    title="Duration"></IconBadge>

                                <span className="base_bold text-filter_green ">20:12:51 Hrs</span>
                            </div>

                            <div className="flex justify-between border border-t-0 py-4 px-2">
                                <IconBadge img={assets.StudentSVG}
                                    title="Enroll"></IconBadge>

                                <span className="base_bold text-filter_green ">400</span>
                            </div>


                            <div className="flex justify-between border border-t-0 py-4 px-2">
                                <IconBadge img={assets.StarSVG}
                                    title="Review"></IconBadge>

                                <Rating></Rating> <span className=".small_semibold">4(2)</span>
                            </div>
                        </div>

                        <div className="tag mt-4 flex flex-col gap-4">
                            <div className="base_bold font-600">
                                Tags
                            </div>

                            <div className="badges flex gap-4">
                                <CategoryBadge className="text-lite_blue bg-fade_white px-3 py-1">BCS</CategoryBadge>
                                <CategoryBadge className="text-lite_blue bg-fade_white px-3 py-1">Bank Job</CategoryBadge>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
