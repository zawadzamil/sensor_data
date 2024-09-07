/* eslint-disable react/prop-types */
import { Fragment } from "react";

import { Typography } from "@/components/shared/typography";



export default function CategoryCard({ icon, title }) {


    return (
        <Fragment>
            <div className="w-[16rem] h-[16rem] py-4 px-2 flex flex-col items-center  justify-center gap-6 bg-white rounded-lg shadow-md">
                {icon}
                <Typography.Text>{title}</Typography.Text>
            </div>
        </Fragment>
    );
}
