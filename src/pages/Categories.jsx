import { Fragment } from "react";
import RegularHeader from "../components/RegularHeader";


export default function Categories() {
    return (
        <Fragment>
            <RegularHeader pageLink='/categories'
                page='Categories'
                title='Bundle Categories'
            ></RegularHeader>
        </Fragment>
    )
}
