import { Fragment } from "react";
import assets from "../assets/asset";
import RegularHeader from "../components/RegularHeader";
import CategoryBadge from "../components/badges/CategoryBadge";
import IconBadge from "../components/badges/IconBadge";
import CommentCard from "../components/cards/CommentCard";
import Heading from "../components/headings/Heading";
import Rating from "../components/rating/Rating";
import FadeText from "../components/texts/FadeTexts";
import Filter from "../components/texts/Filter";
import Paragraph from "../components/texts/Paragraph";
import SmallTitle from "../components/texts/SmallTitle";
import Subtitle from "../components/texts/Subtitle";
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
                        <div className="overview_section hidden">
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

                        {/* Review Section */}
                        <div className="review_section flex flex-col gap-2 mt-10 mb-20 ">
                            <Heading text='Overview'
                                style={`text-[1.5rem] font-lite_blue`}></Heading>

                            <Subtitle> Ratings & reviews are verified.</Subtitle>

                            <div className="review_and_comments border-2 px-4 rounded-lg" >
                                {/* Ratings */}
                                <div className="reviews_details">
                                    <div className="reviews mt-2 p-6 flex justify-between">
                                        <div className="rating_count flex flex-col gap-3 justify-center items-center">
                                            <span className="extra_large_bold text-natural">4.5</span>
                                            <div className="rating mt-3">
                                                <Rating></Rating>
                                            </div>
                                            <Subtitle>Total 2 Ratings</Subtitle>
                                        </div>

                                        <div className="rating_progress flex flex-col gap-2 mt-4">
                                            <div className="flex justify-between">
                                                <div className="flex items-center ">
                                                    <span className="base_normal">5</span>
                                                    <div className="star mr-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M13.1701 15.7492C13.0501 15.7497 12.9318 15.7214 12.8251 15.6667L9.00009 13.6642L5.17509 15.6667C4.92169 15.7999 4.61453 15.7773 4.38341 15.6083C4.15228 15.4394 4.03751 15.1536 4.08759 14.8717L4.83759 10.6492L1.74759 7.64918C1.55113 7.45313 1.479 7.16461 1.56009 6.89918C1.64877 6.62724 1.8844 6.42943 2.16759 6.38918L6.44259 5.76668L8.32509 1.91918C8.4504 1.66043 8.71259 1.49609 9.00009 1.49609C9.28758 1.49609 9.54977 1.66043 9.67509 1.91918L11.5801 5.75918L15.8551 6.38168C16.1383 6.42193 16.3739 6.61974 16.4626 6.89168C16.5437 7.15711 16.4715 7.44563 16.2751 7.64168L13.1851 10.6417L13.9351 14.8642C13.9898 15.1513 13.8727 15.444 13.6351 15.6142C13.4993 15.7093 13.3357 15.7568 13.1701 15.7492Z" fill="#FFC107" />
                                                        </svg>
                                                    </div>
                                                    <progress className="progress progress-warning w-56" value="100" max="100"></progress>
                                                </div>
                                                <div className="count ml-8 small_semibold">
                                                    2 rating
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="flex items-center ">
                                                    <span className="base_normal">4</span>
                                                    <div className="star mr-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M13.1701 15.7492C13.0501 15.7497 12.9318 15.7214 12.8251 15.6667L9.00009 13.6642L5.17509 15.6667C4.92169 15.7999 4.61453 15.7773 4.38341 15.6083C4.15228 15.4394 4.03751 15.1536 4.08759 14.8717L4.83759 10.6492L1.74759 7.64918C1.55113 7.45313 1.479 7.16461 1.56009 6.89918C1.64877 6.62724 1.8844 6.42943 2.16759 6.38918L6.44259 5.76668L8.32509 1.91918C8.4504 1.66043 8.71259 1.49609 9.00009 1.49609C9.28758 1.49609 9.54977 1.66043 9.67509 1.91918L11.5801 5.75918L15.8551 6.38168C16.1383 6.42193 16.3739 6.61974 16.4626 6.89168C16.5437 7.15711 16.4715 7.44563 16.2751 7.64168L13.1851 10.6417L13.9351 14.8642C13.9898 15.1513 13.8727 15.444 13.6351 15.6142C13.4993 15.7093 13.3357 15.7568 13.1701 15.7492Z" fill="#FFC107" />
                                                        </svg>
                                                    </div>
                                                    <progress className="progress progress-warning w-56" value="0" max="100"></progress>
                                                </div>
                                                <div className="count ml-8 small_semibold">
                                                    0 rating
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="flex items-center ">
                                                    <span className="base_normal">3</span>
                                                    <div className="star mr-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M13.1701 15.7492C13.0501 15.7497 12.9318 15.7214 12.8251 15.6667L9.00009 13.6642L5.17509 15.6667C4.92169 15.7999 4.61453 15.7773 4.38341 15.6083C4.15228 15.4394 4.03751 15.1536 4.08759 14.8717L4.83759 10.6492L1.74759 7.64918C1.55113 7.45313 1.479 7.16461 1.56009 6.89918C1.64877 6.62724 1.8844 6.42943 2.16759 6.38918L6.44259 5.76668L8.32509 1.91918C8.4504 1.66043 8.71259 1.49609 9.00009 1.49609C9.28758 1.49609 9.54977 1.66043 9.67509 1.91918L11.5801 5.75918L15.8551 6.38168C16.1383 6.42193 16.3739 6.61974 16.4626 6.89168C16.5437 7.15711 16.4715 7.44563 16.2751 7.64168L13.1851 10.6417L13.9351 14.8642C13.9898 15.1513 13.8727 15.444 13.6351 15.6142C13.4993 15.7093 13.3357 15.7568 13.1701 15.7492Z" fill="#FFC107" />
                                                        </svg>
                                                    </div>
                                                    <progress className="progress progress-warning w-56" value="0" max="100"></progress>
                                                </div>
                                                <div className="count ml-8 small_semibold">
                                                    0 rating
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="flex items-center ">
                                                    <span className="base_normal">2</span>
                                                    <div className="star mr-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M13.1701 15.7492C13.0501 15.7497 12.9318 15.7214 12.8251 15.6667L9.00009 13.6642L5.17509 15.6667C4.92169 15.7999 4.61453 15.7773 4.38341 15.6083C4.15228 15.4394 4.03751 15.1536 4.08759 14.8717L4.83759 10.6492L1.74759 7.64918C1.55113 7.45313 1.479 7.16461 1.56009 6.89918C1.64877 6.62724 1.8844 6.42943 2.16759 6.38918L6.44259 5.76668L8.32509 1.91918C8.4504 1.66043 8.71259 1.49609 9.00009 1.49609C9.28758 1.49609 9.54977 1.66043 9.67509 1.91918L11.5801 5.75918L15.8551 6.38168C16.1383 6.42193 16.3739 6.61974 16.4626 6.89168C16.5437 7.15711 16.4715 7.44563 16.2751 7.64168L13.1851 10.6417L13.9351 14.8642C13.9898 15.1513 13.8727 15.444 13.6351 15.6142C13.4993 15.7093 13.3357 15.7568 13.1701 15.7492Z" fill="#FFC107" />
                                                        </svg>
                                                    </div>
                                                    <progress className="progress progress-warning w-56" value="0" max="100"></progress>
                                                </div>
                                                <div className="count ml-8 small_semibold">
                                                    0 rating
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="flex items-center ">
                                                    <span className="base_normal">1</span>
                                                    <div className="star mr-5">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M13.1701 15.7492C13.0501 15.7497 12.9318 15.7214 12.8251 15.6667L9.00009 13.6642L5.17509 15.6667C4.92169 15.7999 4.61453 15.7773 4.38341 15.6083C4.15228 15.4394 4.03751 15.1536 4.08759 14.8717L4.83759 10.6492L1.74759 7.64918C1.55113 7.45313 1.479 7.16461 1.56009 6.89918C1.64877 6.62724 1.8844 6.42943 2.16759 6.38918L6.44259 5.76668L8.32509 1.91918C8.4504 1.66043 8.71259 1.49609 9.00009 1.49609C9.28758 1.49609 9.54977 1.66043 9.67509 1.91918L11.5801 5.75918L15.8551 6.38168C16.1383 6.42193 16.3739 6.61974 16.4626 6.89168C16.5437 7.15711 16.4715 7.44563 16.2751 7.64168L13.1851 10.6417L13.9351 14.8642C13.9898 15.1513 13.8727 15.444 13.6351 15.6142C13.4993 15.7093 13.3357 15.7568 13.1701 15.7492Z" fill="#FFC107" />
                                                        </svg>
                                                    </div>
                                                    <progress className="progress progress-warning w-56" value="0" max="100"></progress>
                                                </div>
                                                <div className="count ml-8 small_semibold">
                                                    0 rating
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Comments */}

                                <div className="comments">
                                    <CommentCard name="Sadman Arefin"
                                        time="1 Hour Ago"
                                        comment="This course is suitable for those who are trying to learn UX Design from the beginning. As a learner, I can say without any hesitation that if anyone is in a dilemma which course he/she should enroll, then it will be the best option for them.">
                                    </CommentCard>

                                    <CommentCard name="Zawad Zamil"
                                        time="4 Days Ago"
                                        comment="This is a very extensive and thorough course on web development taught by an excellent and passionate teacher. Angela explains difficult concepts in a simple way.">
                                    </CommentCard>
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
