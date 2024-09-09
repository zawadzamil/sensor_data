'use client';
import React from 'react';
import { Input } from '../shared/input';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from '../shared/button';
import { useRouter } from 'next/navigation';
import {
  PATH_LOGIN,
  PATH_MY_TESTS,
  PATH_PROFILE,
  PATH_REGISTER,
} from '@/helpers/Slugs';
import Link from 'next/link';
import { useAuthContext } from '@/contexts/AuthContextProvider';
import { Icons } from '@/assets/icons';
import { Popover } from '../shared/popover';
import { Typography } from '../shared/typography';

const RightNavItems = () => {
  const router = useRouter();
  const { profile, logout, isToken } = useAuthContext();
  const profilePopoverContent = (
    <div className="flex flex-col px-3 py-2 gap-2">
      <Typography.Text className="text-sm font-semibold mx-auto">
        {profile?.info?.fullName}
      </Typography.Text>
      <hr />
      <Link href={PATH_PROFILE}>
        <Button.Outline buttonType="text">Profile</Button.Outline>
      </Link>
      <Button.Outline buttonType="text" onClick={logout}>
        Logout
      </Button.Outline>
    </div>
  );
  return (
    <>
      {isToken() ? (
        <div className="flex gap-3 items-center">
          <Input.Text placeholder="Search" />
          <Link href={PATH_MY_TESTS}>
            <Button.Outline buttonType="text">My Tests</Button.Outline>
          </Link>
          <ShoppingCartOutlined className="text-[24px]" />
          <Popover.Primary content={profilePopoverContent}>
            <Icons.UserSVG width={50} className="cursor-pointer" />
          </Popover.Primary>
        </div>
      ) : (
        <div className="flex gap-3">
          <Input.Text placeholder="Search" />
          <ShoppingCartOutlined className="text-[24px]" />
          <Link href={PATH_LOGIN}>
            <Button.Primary>Login</Button.Primary>
          </Link>
          <Link href={PATH_REGISTER}>
            <Button.Outline>Register now</Button.Outline>
          </Link>
        </div>
      )}
    </>
  );
};

export default RightNavItems;
