/* eslint-disable react/prop-types */
import { Fragment } from "react";
import assets from "../../assets/asset";
import CategoryBadge from "../badges/CategoryBadge";
import IconBadge from "../badges/IconBadge";
import Rating from "../rating/Rating";
import SmallTitle from "../texts/SmallTitle";

export default function CourseCard(props) {
    return (
        <Fragment>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
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

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
