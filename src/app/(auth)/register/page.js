'use client';

import { Typography } from '@/components/shared/typography';
import React, { useState } from 'react';
import useRegisterFormItems from './hooks/useRegisterFormItems';
import BaseForm from '@/components/form/BaseForm';
import { Button } from '@/components/shared/button';
import Link from 'next/link';
import { PATH_LOGIN, PATH_OTP_VERIFY } from '@/helpers/Slugs';
import api from '@/providers/Api';
import { STUDENT_REGISTER_API_URL } from '@/helpers/apiUrl';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const formItems = useRegisterFormItems();

  const handleSubmit = async (form) => {
    try {
      await form.validateFields();
      const value = form.getFieldsValue(true);

      api.post(
        {
          url: STUDENT_REGISTER_API_URL,
          body: value,
          setLoading: setIsLoading,
        },
        (res) => {
          router.push(`${PATH_OTP_VERIFY}?email=${res.data.email}`);
        },
      );
    } catch (error) {
      console.log('Form validation failed:', error);
    }
  };

  return (
    <div className="w-full">
      <Typography.SubHeading className="text-center w-full">
        Create new account
      </Typography.SubHeading>
      <Typography.Text className="text-center w-full">
        Practice on your own time to prepare for your exams.
      </Typography.Text>
      <div className="px-10 pt-10">
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
  );
};

export default Register;
