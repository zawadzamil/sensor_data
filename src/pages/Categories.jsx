import { Fragment } from "react";
import assets from "../assets/asset";
import Pagination from "../components/Pagination";
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
                <Pagination></Pagination>
            </section>
        </Fragment>
    )
}
