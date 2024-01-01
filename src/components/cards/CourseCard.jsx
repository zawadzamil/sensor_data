/* eslint-disable react/prop-types */
import { Fragment } from "react";
import assets from "../../assets/asset";
import CategoryBadge from "../badges/CategoryBadge";
import IconBadge from "../badges/IconBadge";
import Rating from "../rating/Rating";
import Semibold from "../texts/Semibold";
import SmallTitle from "../texts/SmallTitle";

export default function CourseCard(props) {
    return (
        <Fragment>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={props.img} alt="ModelTest" className="w-full h-[15rem]  object-cover" /></figure>
                <div className="card-body">
                    <div className="rating flex justify-between items-center">
                        <CategoryBadge>BCS Exam</CategoryBadge>
                        <Rating></Rating>
                        <span className="font-600 font-lato text-sm">4.0 (2)</span>

                    </div>
                    <SmallTitle rest="card-title mt-6  text-lg">{props.title}</SmallTitle>
                    <div className="details flex justify-start items-center mt-4 gap-6">
                        <IconBadge
                            title="10 Tests"
                            img={assets.graduationCap}>
                        </IconBadge>

                        <IconBadge
                            title="50"
                            img={assets.userMultiple}>
                        </IconBadge>

                    </div>
                    <div className="underline py-5">
                        <hr className="w-full" />
                    </div>

                    <div className="card-actions justify-between ">
                        <div className="text">
                            <Semibold rest={`text-lg`}>${props.price}</Semibold>
                        </div>

                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.8758 9.11328L12.6258 2.86328C12.4008 2.62578 12.0883 2.48828 11.7383 2.48828C11.0508 2.48828 10.4883 3.05078 10.4883 3.73828C10.4883 4.08828 10.6258 4.40078 10.8508 4.62578L14.9633 8.73828H2.98828C2.30078 8.73828 1.73828 9.30078 1.73828 9.98828C1.73828 10.6758 2.30078 11.2383 2.98828 11.2383H14.9758L10.8633 15.3508C10.6383 15.5758 10.5008 15.8883 10.5008 16.2383C10.5008 16.9258 11.0633 17.4883 11.7508 17.4883C12.1008 17.4883 12.4133 17.3508 12.6383 17.1258L18.8883 10.8758C19.1133 10.6508 19.2508 10.3383 19.2508 9.98828C19.2508 9.63828 19.1008 9.33828 18.8758 9.11328Z" fill="#101840" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
