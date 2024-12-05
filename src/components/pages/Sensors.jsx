import React, {Fragment} from 'react';
import {Typography} from "@/components/shared/typography";
import {Button} from "@/components/shared/button";
import Link from "next/link";
import {PATH_CREATE_SENSORS} from "@/helpers/Slugs";
import SensorList from "@/components/pages/SensorList";

const Sensors = () => {

    return (
        <Fragment>
            <div className="flex justify-between items-center px-8 mt-4  w-full">
                <Typography.SubHeading className="">All Sensors</Typography.SubHeading>
                <Link href={PATH_CREATE_SENSORS}>
                    <Button.Primary as="a">Add Sensor</Button.Primary>
                </Link>
            </div>
            <div className="bg-gray-200 rounded-2xl w-[96%] flex flex-col items-center  h-full mt-3 p-4">

                <SensorList/>

            </div>
        </Fragment>
    )
        ;
};

export default Sensors;