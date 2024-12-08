"use client";
import React, {Fragment, useEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {reshapeArray} from "@/helpers/utils";
import {GET_NUMBERS_BY_ID} from "@/helpers/apiUrl";
import {message} from "antd";

const CameraView = ({sensorId}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sensorData, setSensorData] = useState([]);

    console.log(sensorId);

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
                setSensorData(data.lists || []); // Ensure 'lists' exists in the response
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [sensorId]);

    console.log(sensorData);
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

    return (
        <Fragment>
            <div className="w-[60rem] h-[35rem]  m-4">
                <canvas ref={canvasRef} width={500} height={500}></canvas>
            </div>
        </Fragment>
    );
};

export default CameraView;