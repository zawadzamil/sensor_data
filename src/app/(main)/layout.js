'use client';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import "./main.css";
import React from 'react';
import {MAIN_NAVS} from "@/helpers/Navs";
import LeftNavBar from "@/components/layouts/LeftNavBar";


const BaseLayout = ({children}) => {


    const items = MAIN_NAVS;
    return (
        <div>
            <Header/>
            <div className="flex gap-2 ">
                <LeftNavBar/>
                <main className="w-full min-h-[calc(100vh-112px-80px)] ">
                    <div className="w-full min-h-full flex flex-col items-center">
                        {children}
                    </div>

                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default BaseLayout;