import React, {Fragment} from 'react';
import {Typography} from "@/components/shared/typography";
import {Button} from "@/components/shared/button";
import SlotList from "@/components/pages/dealer-dashboard/SlotList";

const Slots = () => {
    return (
        <Fragment>
            <div className="flex justify-between items-center px-8 mt-4  w-full">
                <Typography.SubHeading className="">Summary of Available Spots</Typography.SubHeading>
                <Button.Primary>Create Slot</Button.Primary>
            </div>
            <div className="bg-gray-200 rounded-2xl w-[96%] flex flex-col items-center  h-full mt-3 p-4">

                <SlotList/>

            </div>
        </Fragment>
    );
};

export default Slots;