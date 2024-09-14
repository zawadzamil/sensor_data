// FilterComponents.js
import React from 'react';
import { Checkbox, Radio, Slider, Rate } from 'antd';

export const CheckboxFilter = ({ options, selected, onChange, title }) => (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      {options.map((option) => (
        <div key={option.key} className="mb-2">
          <Checkbox
            onChange={() => onChange(option.key)}
            checked={selected.includes(option.key)}
          >
            {option.label}
          </Checkbox>
          {option.children && (
            <div className="ml-4">
              {option.children.map((child) => (
                <Checkbox
                  key={child.key}
                  onChange={() => onChange(child.key)}
                  checked={selected.includes(child.key)}
                >
                  {child.label}
                </Checkbox>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

export const RadioFilter = ({ options, value, onChange, title }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  </div>
);

export const RangeFilter = ({ min, max, value, onChange, title }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <Slider range min={min} max={max} value={value} onChange={onChange} />
    <div className="flex justify-between">
      <span>৳ {value[0]}</span>
      <span>৳ {value[1]}</span>
    </div>
  </div>
);

export const RatingFilter = ({ onChange, value }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2">Ratings</h3>
    {[5, 4, 3, 2, 1].map((star) => (
      <Checkbox key={star} onChange={() => onChange(star)} checked={value === star}>
        <Rate disabled defaultValue={star} /> & up
      </Checkbox>
    ))}
  </div>
);