import { Fragment } from "react";
import assets from "../assets/asset";
import RegularHeader from "../components/RegularHeader";
import CourseCard from "../components/cards/CourseCard";
import Semibold from "../components/texts/Semibold";
import SmallTitle from "../components/texts/SmallTitle";


export default function Categories() {
    return (
        <Fragment>
            <RegularHeader pageLink='/categories'
                page='Categories'
                title='Bundle Categories'
            ></RegularHeader>
            <section className="body mt-20 myContainer ">
                <div className="grid grid-cols-4 gap-8 mb-12">
                    <div className="sidebar col-span-1 p-4">
                        <div className="flex flex-col justify-start gap-2">
                            {/* Search Box */}
                            <div className="relative ">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <img src={assets.SearchIconSVG} alt="" className=" object-cover" />
                                </span>
                                <input type="text" placeholder="Search Bundles..." className="input input-bordered input-sm w-full max-w-xs pl-10 py-5" />
                            </div>

                            {/* Filter */}
                            <div className="filters">
                                <div className="title p-4 shadow ">
                                    <SmallTitle rest={'text-base'}>Categories</SmallTitle>
                                </div>
                                <div className="filter">
                                    <div className="name p-4">
                                        <SmallTitle rest={'text-base'}>BCS Exam</SmallTitle>
                                    </div>
                                    <div className="options px-2">
                                        <ul className="list-none">
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2023 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2022 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2021 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2020 (12)</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="filter">
                                    <div className="name p-4">
                                        <SmallTitle rest={'text-base'}>Bank Jobs</SmallTitle>
                                    </div>
                                    <div className="options px-2">
                                        <ul className="list-none">
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2023 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2022 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2021 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2020 (12)</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="filter">
                                    <div className="name p-4">
                                        <SmallTitle rest={'text-base'}>Admission</SmallTitle>
                                    </div>
                                    <div className="options px-2">
                                        <ul className="list-none">
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2023 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2022 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2021 (12)</li>
                                            <li className="font-lato text-sm font-normal leading-6 py-[0.38rem] px-2">2020 (12)</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="content col-span-3 ">
                        <div className="heading flex items-center justify-between py-4 px-3">
                            <Semibold rest={`text-lg`} >116 Bundels Found</Semibold>
                            <div className="sort flex gap-6 justify-center ">
                                <div className="">
                                    <SmallTitle rest={`text-base`}>Sort By</SmallTitle>
                                </div>
                                <div className="cursor-pointer">
                                    <details className="dropdown">
                                        <summary className=" font-lato font-600 text-base text-lite_blue">Rating</summary>
                                        <ul className="shadow menu dropdown-content  w-[12rem] rounded-box ">
                                            <li><a>Rating</a></li>
                                            <li><a>Most Purchased</a></li>
                                            <li><a>Newest</a></li>
                                        </ul>
                                    </details>
                                </div>
                            </div>
                        </div>

                        {/* Contents */}

                        <div className="mt-12 grid grid-cols-3 gap-x-6 gap-y-12 ">
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard><CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                            <CourseCard img={assets.course1}
                                title="BCS Exam Prep Model Test Bundle -2023"
                                price="199">
                            </CourseCard>
                        </div>

                    </div>
                </div>
                <div className="pagination flex justify-end">
                    <div className="join">
                        <button className="join-item btn bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.41 8L10.7 4.71C10.89 4.53 11 4.28 11 4C11 3.45 10.55 3 10 3C9.72 3 9.47 3.11 9.29 3.29L5.29 7.29C5.11 7.47 5 7.72 5 8C5 8.28 5.11 8.53 5.29 8.71L9.29 12.71C9.47 12.89 9.72 13 10 13C10.55 13 11 12.55 11 12C11 11.72 10.89 11.47 10.71 11.29L7.41 8Z" fill="#D8DAE5" />
                            </svg>
                        </button>
                        <button className="join-item btn bg-bg_green">1</button>
                        <button className="join-item btn bg-white">2</button>
                        <button className="join-item btn btn-disabled">...</button>
                        <button className="join-item btn bg-white">99</button>
                        <button className="join-item btn bg-white">100</button>
                        <button className="join-item btn bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.71 7.29L6.71 3.29C6.53 3.11 6.28 3 6 3C5.45 3 5 3.45 5 4C5 4.28 5.11 4.53 5.29 4.71L8.59 8L5.3 11.29C5.11 11.47 5 11.72 5 12C5 12.55 5.45 13 6 13C6.28 13 6.53 12.89 6.71 12.71L10.71 8.71C10.89 8.53 11 8.28 11 8C11 7.72 10.89 7.47 10.71 7.29Z" fill="#696F8C" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
