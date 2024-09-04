import { Fragment } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/asset";
import Semibold from "../shared/typography/Semibold";
import SmallTitle from "../shared/typography/SmallTitle";
import Pagination from "../ui/Pagination";
import RegularHeader from "../ui/RegularHeader";
import CourseCard from "../ui/cards/CourseCard";


export default function PATH_CATEGORIES() {

    const courseData = (image, title) => {
        image: image;
        title: title;
    };
    return (
        <Fragment>
            <RegularHeader pageLink='/PATH_CATEGORIES'
                page='PATH_CATEGORIES'
                title='Bundle PATH_CATEGORIES'
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
                                    <SmallTitle rest={'text-base'}>PATH_CATEGORIES</SmallTitle>
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

                        {/* Cources / Bunles */}

                        <div className="mt-12 grid grid-cols-3 gap-x-6 gap-y-12 ">
                            <Link to={{ pathname: '/course-details', state: courseData }} >
                                <CourseCard img={assets.course1}
                                    title="BCS Exam Prep Model Test Bundle -2023"
                                    price="199">
                                </CourseCard>
                            </Link>

                            <Link to='/course-details'>
                                <CourseCard img={assets.course2}
                                    title="BCS Exam Prep Model Test Bundle -2023"
                                    price="199">
                                </CourseCard>
                            </Link>

                            <Link to='/course-details'>
                                <CourseCard img={assets.course3}
                                    title="BCS Exam Prep Model Test Bundle -2023"
                                    price="199">
                                </CourseCard>
                            </Link>
                            <Link to='/course-details'>
                                <CourseCard img={assets.course4}
                                    title="BCS Exam Prep Model Test Bundle -2023"
                                    price="199">
                                </CourseCard>
                            </Link>

                            <Link to='/course-details'>
                                <CourseCard img={assets.course5}
                                    title="BCS Exam Prep Model Test Bundle -2023"
                                    price="199">
                                </CourseCard>
                            </Link>

                            <Link to='/course-details'>
                                <CourseCard img={assets.course6}
                                    title="BCS Exam Prep Model Test Bundle -2023"
                                    price="199">
                                </CourseCard>
                            </Link>
                        </div>

                    </div>
                </div>
                <Pagination></Pagination>
            </section>
        </Fragment >
    );
}
