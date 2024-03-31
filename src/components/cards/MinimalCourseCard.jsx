import React, { Fragment } from 'react';
import CategoryBadge from '../badges/CategoryBadge';
import Rating from '../rating/Rating';
import Subtitle from '../texts/Subtitle';
import Title from '../texts/Title';

export default function MinimalCourseCard(props) {
    return (
        <Fragment>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={props.img} alt="ModelTest" className="w-full h-[9rem]  object-cover rounded-t-md" /></figure>
                <div className="card-body p-4 flex flex-col">
                    <div className="rating">
                        <Rating></Rating>
                        <span className="base_normal">4.6</span>
                    </div>

                    <Title className="text-lg mt-4 overflow-hidden">{props.title}</Title>
                    <Subtitle> Cristofer Jonas</Subtitle>
                    <span className="underline my-3"></span>

                    <div className="pricing flex justify-between mt-[1rem]">
                        <Title className="text-lg">{props.price}</Title>
                        <CategoryBadge className="text-badge_yellow bg-badge_yellow_bg base_normal ">Best Seller</CategoryBadge>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
