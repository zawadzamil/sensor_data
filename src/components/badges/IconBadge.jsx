/* eslint-disable react/prop-types */
import { Fragment } from "react";
import SmallTitle from "../texts/SmallTitle";

export default function IconBadge(props) {
    return (
        <Fragment>
            <div className="flex gap-2 items-center">
                <img src={props.img} alt="demo" className="relative" />
                <SmallTitle rest="text-sm ">{props.title}</SmallTitle>
            </div>

        </Fragment>
    )
}
