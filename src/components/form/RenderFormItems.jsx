// renderFormItem.js (Extended)
import React, { useEffect, useState } from 'react';
import {
  Input,
  Select,
  InputNumber,
  AutoComplete,
  Cascader,
  Form,
  Checkbox,
  Button,
} from 'antd';

const { Option } = Select;

const renderFormItem = (
  item,
  options,
  setOptions,
  handleAutoCompleteChange,
  form,
) => {
  const onChange = (text) => {
    // form.setFieldsValue({ [item.name]: text });
    console.log('otp', text);
    form.setFieldValue(item.name, text);
  };
  const sharedProps = {
    onChange,
  };

  switch (item.type) {
    case 'input':
      return <Input placeholder={item.placeholder} />;
    case 'password':
      return <Input.Password placeholder={item.placeholder} />;
    case 'inputNumber':
      return (
        <InputNumber placeholder={item.placeholder} style={{ width: '100%' }} />
      );
    case 'autoComplete':
      return (
        <></>
        // <AutoComplete
        //   options={options[item.name]}
        //   placeholder={item.placeholder}
        //   onChange={(value) => handleAutoCompleteChange(item.name, value)}
        // >
        //   <Input />
        // </AutoComplete>
      );
    case 'cascader':
      return <Cascader options={item.options} placeholder={item.placeholder} />;
    case 'dropdown':
      return (
        <Select placeholder={item.placeholder}>
          {options.map((opt) => (
            <Option key={opt.value} value={opt.value}>
              {opt.label}
            </Option>
          ))}
        </Select>
      );
    case 'checkbox':
      return <Checkbox>{item.checkboxLabel}</Checkbox>;
    case 'otp':
      return (
        <Input.OTP
          style={{
            width: '100%',
          }}
          {...sharedProps}
        />
      );
    case 'captcha':
      return (
        <Form.Item>
          <Button>{item.buttonText || 'Get Captcha'}</Button>
        </Form.Item>
      );
    default:
      return <Input placeholder={item.placeholder} />;
  }
};

export default renderFormItem;
