"use client";
import React from 'react';
import { Typography } from '../shared/typography';
import { Carousel } from '../shared/carousel';
import Img from '../shared/Img';
import BackDropCard from '../shared/cards/BackDropCard';

const UpcommingMovieSection = () => {
    return (
        <section className='py-5 bg-black'>
            <Typography.SubHeading className="text-sky-500 text-center" label="Upcomming" subLebel="Movies" />
            <Typography.Text className="text-center" label="We constanly offers new movies" />
            <div>
                <Carousel.Primary
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    // className="rounded-lg mx-10 h-[450px] w-[285px] bg-inherit"
                    slidesPerView={4}
                    showPrevAndNext={false}
                >
                    {(item,isActive) => <div className="relative bg-inherit">
                        <BackDropCard data={item} isActive={isActive}/>
                    </div>}
                </Carousel.Primary>

            </div>
        </section>
    );
};

export default UpcommingMovieSection;