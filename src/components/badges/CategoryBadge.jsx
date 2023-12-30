/* eslint-disable react/prop-types */
import { Fragment } from "react";


export default function CategoryBadge({ children }) {
    return (
        <Fragment>
            <span className="text-badge_yellow px-3 py-1 font-lato bg-badge_yellow_bg ">{children}</span>
        </Fragment>
    )
}
