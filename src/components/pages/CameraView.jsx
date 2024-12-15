"use client";
import React, {Fragment, useEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {reshapeArray} from "@/helpers/utils";
import {GET_NUMBERS_BY_ID} from "@/helpers/apiUrl";
import {DatePicker, message} from "antd";
import {Typography} from "@/components/shared/typography";
import dayjs from "dayjs";

const CameraView = ({sensorId}) => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sensorData, setSensorData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [average, setAverage] = useState(0);

    useEffect(() => {
        if (!sensorId) return;


        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(` ${GET_NUMBERS_BY_ID}/${sensorId}`);
                if (!response.ok) {
                    message.error(response.message);
                }

                const data = await response.json();
                setAllData(data);
                setSensorData(data[0].lists || []); // Ensure 'lists' exists in the response

                const fetchedSensorData = data[0].lists || [];

                const sum = fetchedSensorData.reduce((acc, num) => acc + num, 0);
                const avg = fetchedSensorData.length > 0 ? sum / fetchedSensorData.length : 0;
                setAverage(avg);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [sensorId]);


    const thermalMatrix = reshapeArray(sensorData, 24, 32);
    const colorScale = d3.scaleSequential(d3.interpolateTurbo).domain([Math.min(...sensorData), Math.max(...sensorData)]);

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const cellWidth = canvas.width / thermalMatrix[0].length;
        const cellHeight = canvas.height / thermalMatrix.length;

        thermalMatrix.forEach((row, y) => {
            row.forEach((value, x) => {
                ctx.fillStyle = colorScale(value);
                ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
            });
        });
    }, [thermalMatrix, colorScale]);

    const [selectedDate, setSelectedDate] = useState(null);

    // Filter data by selected date
    const filteredData = selectedDate
        ? allData.filter((data) =>
            dayjs(Number(data?.createdAt)).isSame(selectedDate, "day")
        )
        : allData;

    return (
        <Fragment>

            <div className="w-fit h-fit  m-4">
                <canvas ref={canvasRef} width={500} height={500}></canvas>
                <div className="mt-10">
                    <Typography.Text>Max : {Math.max(...sensorData)}</Typography.Text>
                    <Typography.Text>Min : {Math.min(...sensorData)}</Typography.Text>
                    <Typography.Text>AVG : {average}</Typography.Text>
                </div>

                <div className="mt-10">
                    <div style={{marginBottom: "16px"}}>
                        <DatePicker
                            onChange={(date) => setSelectedDate(date ? date.startOf("day") : null)}
                            allowClear
                            placeholder="Select a date"
                        />
                    </div>
                    <Typography.Text>History</Typography.Text>
                    <table border="1px" style={{width: "100%", borderCollapse: "collapse"}}>
                        <thead>
                        <tr>
                            <th style={{padding: "8px", textAlign: "left"}}>Created At</th>
                            <th style={{padding: "8px", textAlign: "left"}}>Max</th>
                            <th style={{padding: "8px", textAlign: "left"}}>Min</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData.map((data) => (
                            <tr key={data.id}>
                                <td style={{padding: "8px", border: "1px solid black"}}>
                                    {dayjs(Number(data?.createdAt)).format("YYYY-MM-DD HH:mm:ss")}
                                </td>
                                <td style={{padding: "8px", border: "1px solid black"}}>
                                    {Math.max(...data.lists)}
                                </td>
                                <td style={{padding: "8px", border: "1px solid black"}}>
                                    {Math.min(...data.lists)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default CameraView;