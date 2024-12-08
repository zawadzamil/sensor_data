"use client";
import React from 'react';
import CameraView from "@/components/pages/CameraView";
import {useParams} from "next/navigation";

const CameraViewPage = () => {
    const {sensorId} = useParams(); // Get ID from the route (if applicable)
    return (
        <div>
            <CameraView sensorId={sensorId}/>
        </div>
    );
};

export default CameraViewPage;