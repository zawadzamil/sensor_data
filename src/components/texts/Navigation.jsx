/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Navigation(props) {
    return (
        <Fragment>
            <a href={props.link}>
                <span className="text-slate-600 text-base font-semibold font-lato leading-normal px-1">{props.text}</span>
            </a>
        </Fragment>
    )
}
