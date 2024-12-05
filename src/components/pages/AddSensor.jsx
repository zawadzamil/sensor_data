'use client';
import React, {Fragment, useState} from 'react';
import {Input} from "antd";
import {Typography} from "@/components/shared/typography";
import BaseForm from "@/components/form/BaseForm";
import {useRouter} from "next/navigation";
import api from "@/providers/Api";
import {CREATE_SENSOR, USER_LOGIN_API_URL} from "@/helpers/apiUrl";
import createSensorFormItem from "@/app/(main)/create/hooks/createSensorFormItem";
import {Button} from "@/components/shared/button";

const CreateSensorForm = () => {

    const formItems = createSensorFormItem();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (form) => {
        try {
            await form.validateFields();
            const value = form.getFieldsValue(true);

            api.post(
                {
                    url: CREATE_SENSOR,
                    body: value,
                    setLoading: setIsLoading,
                },
                (res) => {
                    console.log(res);
                },
            );
        } catch (error) {
            console.log('Form validation failed:', error);
        }
    };

    return (
        <Fragment>
            <div className=" px-8 mt-4  w-full">
                <Typography.Heading className="text-lg ">Add Sensor Data</Typography.Heading>
                <div className="w-2/4 mt-10">
                    <BaseForm formItems={formItems} renderExtraSection={
                        (form) => (
                            <Button.Primary
                                className="w-full mt-1"
                                type="primary"
                                onClick={() => handleSubmit(form)}
                                loading={isLoading}
                                disabled={isLoading}>Submit</Button.Primary>
                        )
                    }></BaseForm>
                </div>
            </div>
        </Fragment>
    )
        ;
};

export default CreateSensorForm;