/* eslint-disable react/prop-types */
import { Fragment } from "react";


export default function FadeText({ children, ...rest }) {
    return (
        <Fragment>
            <span className={`font-600 font-lato text-fade_blue  leading-24  hover:opacity-75 rounded`}
                {...rest}>
                {children}
            </span>
        </Fragment>
    )
}
