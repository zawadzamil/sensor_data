'use client';
import React, { useState } from 'react';
import { Input } from 'antd';
import { Typography } from '@/components/shared/typography';
import { Button } from '@/components/shared/button';
import BaseForm from '@/components/form/BaseForm';
import useFormItems from './hooks/useOtpFormItems';
import { Icons } from '@/assets/icons';
import Link from 'next/link';
import { PATH_HOME, PATH_LOGIN, PATH_RESET_PASSWORD } from '@/helpers/Slugs';
import { useRouter, useSearchParams } from 'next/navigation';
import { USER_OTP_VERIFY_API_URL } from '@/helpers/apiUrl';
import api from '@/providers/Api';
import { Toast } from '@/components/shared/toast/Toast';

const OTPPage = () => {
  const formItems = useFormItems();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (form) => {
    try {
      await form.validateFields();
      const value = form.getFieldsValue(true);
      api.post(
        {
          url: `${USER_OTP_VERIFY_API_URL}?code=${value.otp}&email=${email}`,
          body:{},
          setLoading: setIsLoading,
        },
        (res) => {
          router.push(PATH_HOME);
          Toast('success', 'Registration successful', '');
        },
      );
    } catch (error) {
      console.log('Form validation failed:', error);
    }
  };

  return (
    <div className="w-full">
      <Typography.SubHeading className="text-center w-full">
        OTP has been sent
      </Typography.SubHeading>
      <Typography.Text className="text-center w-full">
        Please check your message inbox for the OTP code.
      </Typography.Text>
      <div className="pt-4 w-full">
        <Typography.Text className="text-center w-full ">
          We have sent an OTP code to
        </Typography.Text>

        <Typography.Text className="text-center w-full font-semibold mb-5">
          {email}
        </Typography.Text>
        <BaseForm
          formItems={formItems}
          renderExtraSection={(form) => (
            <div>
              <Button.Primary
                className="w-full"
                onClick={() => handleSubmit(form)}
                loading={isLoading}
                disabled={isLoading}
              >
                Verify OTP
              </Button.Primary>
              <Button.Outline className="w-full mt-1" buttonType="text">
                <span className="text-primary"> Re-send code</span>
              </Button.Outline>
            </div>
          )}
        />

        <Typography.Text className="text-center w-full">
          Typed wrong phone number? Go back to change phone number.
        </Typography.Text>
        <Link href={PATH_RESET_PASSWORD}>
          <Typography.Text className="text-center text-primary font-semibold w-full">
            <span className="flex items-center justify-center gap-2">
              <Icons.BackArrowGreen />
              <>Change phone number</>
            </span>
          </Typography.Text>
        </Link>
      </div>
    </div>
  );
};

export default OTPPage;
