/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Paragraph({ children, ...rest }) {
    return (
        <Fragment>
            <p className={`font-lato text-sm font-normal text-lite_blue text-justify`}{...rest}>
                {children}
            </p>
        </Fragment>
    )
}
