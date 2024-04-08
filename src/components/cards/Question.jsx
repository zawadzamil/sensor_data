import React, { Fragment } from 'react'
import Radio from '../buttons/Radio'

export default function Question() {
    return (
        <Fragment>
            <div className="question mt-9 px-9 py-8 shadow-lg shadow-gray-200 rounded-md">
                <div className="q_title flex justify-between items-center">
                    <h3 className="base_bold">What is the capital of Bangladesh?</h3>
                    <h3 className="base_thin">Points : <span className="font-bold"> 2</span></h3>
                </div>

                {/* Options */}
                <div className="options flex flex-col gap-4 mt-6">

                    <Radio id="radio1" value="dhaka" label="Dhaka"></Radio>
                    <Radio id="radio2" value="Khulna" label="Khulna"></Radio>
                    <Radio id="radio3" value="Magura" label="Magura"></Radio>
                    <Radio id="radio4" value="Sylet" label="Sylet"></Radio>
                </div>

            </div>
        </Fragment>
    )
}
