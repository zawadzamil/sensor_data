import React, { Fragment, useState } from 'react';

export default function Radio({ id, value, label }) {

    const [selected, setSelected] = useState(null);

    const handleChange = (option) => {
        setSelected(option);
        console.log(selected)
    };
    return (
        <Fragment>
            <div className="option flex items-center gap-3">
                <input type="radio"
                    id={id}
                    name="radio"
                    value={value}
                    onChange={() => handleChange(id)}
                    className="radio radio-sm checked:bg-gray-500" />

                <label htmlFor={id} className={selected === id ? `base_semibold` : `base_thin`}>{label}</label>
            </div>
        </Fragment>
    )
}
