import React from 'react';
import Img from '../Img';
import { Typography } from '../typography';

const BackDropCard = ({ data,isActive }) => {
    return (
        <div className={`${isActive ? "border border-gradient-to-r from-cyan-500 to-indigo-600" :""} relative rounded-b-lg`}>
            <div className="backdrop-blur-sm bg-white/30 absolute bottom-0 w-full h-12 rounded-b-lg">
                <Typography.Text label={data} />
            </div>

        </div>
    );
};

export default BackDropCard;