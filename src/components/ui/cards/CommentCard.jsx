/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Rating from "../rating/StarRating";
import Subtitle from "../../shared/typography/SubHeading";
import { Typography } from "@/components/shared/typography";
import StarRating from "../rating/StarRating";

export default function CommentCard(props) {
    return <Fragment>
        <div className="comments p-6 flex justify-between items-center w-full border-t-2">
            <div className="profile">
                <div className=" flex flex-col justify-center px-4 items-center gap-2">
                    {/* Picture */}
                    <div className="profilePicture w-16 h-16 flex justify-center items-center rounded-full bg-blue-600">
                        <Subtitle className="text-white">SA</Subtitle>
                    </div>

                    {/* Name */}
                    <div className="name">
                        <Typography.Text> {props.name} </Typography.Text>
                    </div>

                    {/* Time */}
                    <div className="time">
                        <h4 className="small_normal">{props.time}</h4>
                    </div>
                </div>
            </div>

            <div className="review  w-[55%]">
                <div className="review flex flex-col gap-2 justify-between">
                    <div className="rating ">
                        <StarRating rating={4} totalReviews={9}/>
                    </div>

                    <div className="comment ">
                        <p className="small_normal">
                            {props.comment}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}
