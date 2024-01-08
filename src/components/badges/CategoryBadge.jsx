/* eslint-disable react/prop-types */
import { Fragment } from "react";


export default function CategoryBadge({ children, ...rest }) {
    return (
        <Fragment>
            <span className={` px-3 py-1 font-lato  `} {...rest}>{children}</span>
        </Fragment>
    )
}
