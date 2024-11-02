'use client';
import React, {Fragment, useState} from 'react';
import { Form, Input, InputNumber} from 'antd';
import useCreateSpotForm from "@/app/(main)/dealer-dashboard/create/hooks/useCreateSpotHook";
import {Typography} from "@/components/shared/typography";
import Link from "next/link";
import {PATH_LOGIN} from "@/helpers/Slugs";
import BaseForm from "@/components/form/BaseForm";
import {Button} from "@/components/shared/button"

const DynamicCreateSpotForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formItems = useCreateSpotForm();

  const onFinish = (values) => {
    console.log('Form Data:', values);
    // Handle form submission (e.g., API call)
  };

    const handleSubmit = async (form) => {
        // try {
        //     await form.validateFields();
        //     const value = form.getFieldsValue(true);
        //
        //     api.post(
        //         {
        //             url: STUDENT_REGISTER_API_URL,
        //             body: value,
        //             setLoading: setIsLoading,
        //         },
        //         (res) => {
        //             router.push(`${PATH_OTP_VERIFY}?email=${res.data.email}`);
        //         },
        //     );
        // } catch (error) {
        //     console.log('Form validation failed:', error);
        // }
    };




    const renderFormItem = (fieldKey, fieldData) => {
    const { label, type, rules, defaultValue } = fieldData;
    return (
        <Form.Item
            key={fieldKey}
            label={label}
            name={fieldKey}
            rules={rules}
        >
          {type === 'input' ? (
              <Input defaultValue={defaultValue} />
          ) : (
              <InputNumber defaultValue={defaultValue} className="w-full" />
          )}
        </Form.Item>
    );
  };

  return (
      <Fragment>
          <div className="flex justify-between items-center px-8 mt-4  w-full">
              <div className=" mx-auto mt-8 bg-gray-100 p-6 rounded-md shadow-lg w-full ">
                  <Typography.SubHeading className="text-center">Add New Spot</Typography.SubHeading>
                  <BaseForm
                      formItems={formItems}
                      renderExtraSection={(form) => (
                          <div>
                              <div className="w-full flex justify-between mb-5"></div>
                              <Button.Primary
                                  className="w-full"
                                  type="primary"
                                  onClick={() => handleSubmit(form)}
                                  loading={isLoading}
                                  disabled={isLoading}
                              >
                                  Create Account
                              </Button.Primary>

                              <div className="flex">
                                  <Typography.Text className="">
                                      {'Already have an account?'}
                                  </Typography.Text>
                                  <Link href={PATH_LOGIN} className="cursor-pointer ml-1">
                                      <Typography.Text className="text-primary font-bold">
                                          Log in
                                      </Typography.Text>
                                  </Link>
                              </div>
                          </div>
                      )}
                  />
              </div>

          </div>

      </Fragment>

  )
      ;
};

export default DynamicCreateSpotForm;
