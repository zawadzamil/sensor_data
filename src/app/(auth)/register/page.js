'use client';

import { Typography } from '@/components/shared/typography';
import React from 'react';
import useRegisterFormItems from './hooks/useRegisterFormItems';
import BaseForm from '@/components/form/BaseForm';
import { Button } from '@/components/shared/button';
import Link from 'next/link';
import { PATH_LOGIN } from '@/helpers/Slugs';

const Register = () => {
  const formItems = useRegisterFormItems();

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
              <div className="w-full flex justify-between mb-5"></div>
              <Button.Primary className="w-full" type="primary">
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
  );
};

export default Register;
