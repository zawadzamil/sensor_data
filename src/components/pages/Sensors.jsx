"use client";
import React, {Fragment, useEffect, useState} from 'react';
import {Typography} from "@/components/shared/typography";
import {Button} from "@/components/shared/button";
import Link from "next/link";
import {PATH_CREATE_SENSORS} from "@/helpers/Slugs";
import SensorList from "@/components/pages/SensorList";
import {GET_ALL_SENSORS} from "@/helpers/apiUrl";
import axios from "axios";
import {message} from "antd";

const Sensors = () => {

    const [sensors, setSensors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSensors = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${GET_ALL_SENSORS}`); // Replace with your API endpoint
                setSensors(response.data);

            } catch (err) {
                message.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSensors();
    }, []);

    return (
        <Fragment>
            <div className="flex justify-between items-center px-8 mt-4  w-full">
                <Typography.SubHeading className="">All Sensors</Typography.SubHeading>
                <Link href={PATH_CREATE_SENSORS}>
                    <Button.Primary as="a">Add Sensor</Button.Primary>
                </Link>
            </div>
            <div className="bg-gray-200 rounded-2xl w-[96%] flex flex-col items-center  h-full mt-3 p-4">

                <SensorList data ={sensors}/>

            </div>
        </Fragment>
    )
        ;
};

export default Sensors;