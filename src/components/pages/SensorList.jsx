import React, {Fragment} from 'react';
import {timestampToLocalDateTime} from "@/helpers/utils";
import Link from "next/link";

const SensorList = ({data}) => {

    return (
        <Fragment>
            <div className="overflow-x-auto mt-4 w-[70%] shadow-lg rounded">
                <table className="table-auto w-full text-center">
                    <thead className="text-white">
                    <tr className="bg-primary p-4 rounded-2xl">
                        <th className="px-4 py-2">Sensor ID</th>
                        <th className="px-4 py-2">Created At</th>
                        <th className="px-4 py-2">Camera View</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((sensor) => (
                        <tr className="bg-white border-b" key={sensor.id}>
                            <td className="px-4 py-2">{sensor?.sensorId}</td>
                            <td className="px-4 py-2">{timestampToLocalDateTime(Number(sensor?.createdAt))}</td>

                            <td className="px-4 py-2">
                                <Link href={`/${sensor.sensorId}`} className="text-blue-500 hover:underline">View</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default SensorList;