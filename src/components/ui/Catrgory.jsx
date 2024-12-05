/* eslint-disable react/prop-types */
import { PATH_CREATE_SENSORS } from "@/helpers/Slugs";
import { categoryData } from "@/helpers/StaticData";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "../shared/button";
import { Tags } from "../shared/tags";
import { Typography } from "../shared/typography";
import CategoryCard from "./cards/CategoryCard";


export default function Category() {
    return (
        <Fragment>
            <section className="relative mt-24 bg-success-light">

                <div className={`myContainer bg-natural_bg_green pt-[4rem]`}>
                    <div className="top flex justify-between items-center pt-[2rem] ">
                        <div className="text-area flex flex-col">
                            <Tags.Primary
                                presets="white"
                                className="pl-0 font-normal bg-transparent"
                                text="Top Categories"
                            />
                            <Typography.SubHeading>Top Categories</Typography.SubHeading>
                        </div>
                        <Link href={PATH_CREATE_SENSORS}>
                            <Button.Outline>  Explore All</Button.Outline>
                        </Link>

                    </div>

                    <div className="category pt-[2.25rem] grid grid-cols-4 gap-6 pb-[7.81rem]">
                        {categoryData.map((data, index) =>
                            <CategoryCard
                                key={index}
                                icon={data.icon}
                                title={data.title}
                            />)}

                    </div>
                </div>
                <div className="custom-shape-divider-top-1703851278 absolute w-full h-full top-0 -z-50">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-16 w-full">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>


        </Fragment>
    );
}
