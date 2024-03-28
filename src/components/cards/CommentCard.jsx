/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Rating from "../rating/Rating";
import SmallTitle from "../texts/SmallTitle";
import Subtitle from "../texts/Subtitle";

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
                        <SmallTitle> {props.name} </SmallTitle>
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
                        <Rating></Rating>
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
