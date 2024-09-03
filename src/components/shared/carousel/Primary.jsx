"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
const SlideNextButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slideNext()}
            // className="w-10 h-10 bg-white text-sky-500 rounded-md font-semibold text-2xl absolute top top-2/4 z-10 right-0"
        >{">"}
        </button>
    );
};
const SlidePrevButton = () => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => swiper.slidePrev()}
            // className="w-10 h-10 bg-white text-sky-500 rounded-md font-semibold text-2xl absolute top-2/4 z-10 z-10 left-0"
        > {"<"}
        </button>
    );
};

const Primary = ({ data = [], children, className, slidesPerView = 1, showPrevAndNext = true, ...props }) => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={5}
                slidesPerView={slidesPerView}
                navigation
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className={className}
                {...props}
            >
                {showPrevAndNext && <SlideNextButton />}
                {data?.map((value, index) => (
                    <SwiperSlide key={index} >
                        {({ isActive }) => (
                            <>
                                {children(value, isActive)}
                            </>
                        )}
                    </SwiperSlide>
                ))}

                {showPrevAndNext && < SlidePrevButton />}
            </Swiper>
        </>
    );
};

export default Primary;