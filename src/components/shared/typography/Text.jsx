import React from 'react';
import { twMerge } from "tailwind-merge";


const Text = ({ children, className }) => {
    return (
        <>
            <p className={twMerge("text-neutral-light font-600", className)}>
            {children}
            </p>
        </>
    );
};

export default Text;