import React, { Fragment } from 'react';

export default function ResultRadio({ id, value, label, selected, correct }) {

    return (
        <Fragment>
            <div className="option flex items-center gap-3">
                <input type="radio"
                    id={id}
                    name="radio"
                    value={value}
                    checked={selected}
                    className={`radio radio-sm ${correct ? 'bg-green-500' : 'bg-red-600'}`} />

                <label htmlFor={id} className={` ${correct ? 'text-title_green base_semibold flex' : '  base_thin flex'}`}>{label}
                    {correct ?
                        <div className="w-6 h-6 ms-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 12.75L11.25 15L15 9.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#52BD94" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div> : ''}
                </label>

            </div>
        </Fragment>
    )
}
