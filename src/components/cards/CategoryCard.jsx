/* eslint-disable react/prop-types */
import { Fragment } from "react";

import Subtitle from "../texts/Subtitle";


export default function CategoryCard(props) {
    return (
        <Fragment>
            <div className="w-[16rem] h-[16rem] py-4 px-2 flex flex-col items-center  justify-center gap-6 bg-white rounded-lg shadow-md">
                <img src={props.image} className="w-24 h-24 shrink-0"></img>
                <Subtitle>{props.title}</Subtitle>
            </div>
        </Fragment>
    )
}
