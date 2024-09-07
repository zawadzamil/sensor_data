'use client';
import BaseForm from '@/components/form/BaseForm';
import { Typography } from '@/components/shared/typography';
import React, { useState } from 'react';
import useFormItems from './hooks/useResetPassFormItems';
import { Button } from '@/components/shared/button';
import Link from 'next/link';
import { Icons } from '@/assets/icons';
import { PATH_LOGIN } from '@/helpers/Slugs';
import api from '@/providers/Api';
import { USER_FORGOT_PASSWORD_API_URL } from '@/helpers/apiUrl';

const ForgotPassword = () => {
  const formItems = useFormItems();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (form) => {
    try {
      await form.validateFields();
      const value = form.getFieldsValue(true);

      api.post(
        {
          url: USER_FORGOT_PASSWORD_API_URL,
          body: value,
          setLoading: setIsLoading,
        },
        (res) => {},
      );
    } catch (error) {
      console.log('Form validation failed:', error);
    }
  };
  return (
    <div className="w-full">
      <Typography.SubHeading className="text-center w-full">
        Forgot password
      </Typography.SubHeading>
      <Typography.Text className="text-center w-full">
        Enter the phone number you use on ModelTest. We’ll send you an OTP to
        reset your password.
      </Typography.Text>
      <div className="px-10 pt-10">
        <BaseForm
          formItems={formItems}
          renderExtraSection={(form) => (
            <div>
              <Button.Primary
                className="w-full"
                type="primary"
                onClick={() => handleSubmit(form)}
                loading={isLoading}
                disabled={isLoading}
              >
                Reset Password
              </Button.Primary>
            </div>
          )}
        />

        <Link href={PATH_LOGIN}>
          <Typography.Text className="text-center text-primary font-semibold w-full">
            <span className="flex items-center justify-center gap-2">
              <Icons.BackArrowGreen />
              <>Back to Log in</>
            </span>
          </Typography.Text>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
