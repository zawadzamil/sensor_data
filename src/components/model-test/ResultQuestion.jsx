import React, { Fragment } from 'react';
import ResultRadio from './ResultRadio';

export default function Question(props) {
    const options = [
        { id: '1', value: 'A', label: 'Option A', correct: false, selected: true },
        { id: '2', value: 'B', label: 'Option B', correct: true },
        { id: '3', value: 'C', label: 'Option C', correct: false, selected: true },
        { id: '4', value: 'D', label: 'Option D', correct: false },
    ];
    return (
        <Fragment>
            <div className="question mt-9 px-9 py-8 shadow-lg shadow-gray-200 rounded-md">
                <div className="q_title flex justify-between items-center">
                    <h3 className="base_bold">What is the capital of Bangladesh?</h3>
                    <h3 className="base_thin text-lite_blue">Points Earned :
                        <span className={`text-${props.correct ? 'title_green' : 'red_base'} mx-1 font-bold`}>{props.point}</span> out of
                        <span className="font-bold ml-2">2</span>
                        <span className={`font-bold text-${props.correct ? 'title_green' : 'red_base'} ps-1 border-s-2 ml-2`}> {props.correct ? 'Correct' : 'Wrong'}</span>
                    </h3>
                </div>

                {/* Options */}
                <div className="options flex flex-col gap-4 mt-6">

                    <div>
                        {options.map((option) => (
                            <ResultRadio
                                key={option.id}
                                id={option.id}
                                value={option.value}
                                label={option.label}
                                correct={option.correct}
                                selected={option.selected}
                            />
                        ))}
                    </div>


                </div>

            </div>
        </Fragment>
    )
}
