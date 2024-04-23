/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/asset";
import WhiteButton from "./buttons/WhiteButton";
import CategoryCard from "./cards/CategoryCard";


export default function Catrgory(props) {
    return (
        <Fragment>
            <section className="relative mt-24">

                <div className={`myContainer bg-natural_bg_green pt-[4rem]`}>
                    <div className="top flex justify-between align-middle pt-[2rem] ">
                        <div className="text-area flex flex-col">
                            {props.subtitle}
                            {props.title}
                        </div>
                        <Link to='/categories'>
                            <WhiteButton>  Explore All</WhiteButton>
                        </Link>

                    </div>

                    <div className="categories pt-[2.25rem] grid grid-cols-4 gap-6 pb-[7.81rem]">
                        <CategoryCard
                            image={assets.palette}
                            title="Arts and Design"
                        ></CategoryCard>
                        <CategoryCard
                            image={assets.fileCode}
                            title="Development"
                        ></CategoryCard>
                        <CategoryCard
                            image={assets.presentation}
                            title="Marketing"
                        ></CategoryCard>
                        <CategoryCard
                            image={assets.cpu}
                            title="Machine Learning"
                        ></CategoryCard>
                        <CategoryCard
                            image={assets.desktop}
                            title="Computer Science"
                        ></CategoryCard> <CategoryCard
                            image={assets.film}
                            title="Video Editing"
                        ></CategoryCard>
                        <CategoryCard
                            image={assets.calculator}
                            title="Mathamatics"
                        ></CategoryCard>
                        <CategoryCard
                            image={assets.atom}
                            title="Science"
                        ></CategoryCard>
                    </div>
                </div>
                <div className="custom-shape-divider-top-1703851278 absolute w-full h-full top-0 -z-50">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-16 w-full">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>


        </Fragment>
    )
}
