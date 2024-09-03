'use client';

import BaseForm from '@/components/form/BaseForm';
import React from 'react';
import useLoginFormItems from './hooks/useLoginFormItems';
import { Typography } from '@/components/shared/typography';
import { Button } from '@/components/shared/button';
import { onValidateForm } from '@/helpers/utils';
import { Checkbox } from 'antd';
import Link from 'next/link';
import { PATH_FORGOT_PASSWORD, PATH_REGISTER } from '@/helpers/Slugs';

const Login = () => {
  const formItems = useLoginFormItems();

  const handleSubmit = (form) => {
    // const value = onValidateForm(form);
    // console.log("----",value);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="w-full">
      <Typography.SubHeading className="text-center w-full">
        Welcome back!
      </Typography.SubHeading>
      <Typography.Text className="text-center w-full">
        ModelTest gives you the resources and tests you need to prepare for your
        exams.
      </Typography.Text>
      <div className="px-10 pt-10">
        <BaseForm
          formItems={formItems}
          renderExtraSection={(form) => (
            <div>
              <div className="w-full flex justify-between mb-10">
                <Checkbox onChange={onChange}>Remember me </Checkbox>
                <Link href={PATH_FORGOT_PASSWORD} className="cursor-pointer">
                  <Typography.Text className="text-primary">
                    Forgot Password
                  </Typography.Text>
                </Link>
              </div>
              <div>
                <Button.Primary
                  className="w-full"
                  type="primary"
                  onClick={() => handleSubmit(form)}
                >
                  Login
                </Button.Primary>
              </div>

              <div className="flex mt-3">
                <Typography.Text className="">
                  {'Don’t have an account?'}
                </Typography.Text>
                <Link href={PATH_REGISTER} className="cursor-pointer ml-1">
                  <Typography.Text className="text-primary font-bold">
                    Create an account
                  </Typography.Text>
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
