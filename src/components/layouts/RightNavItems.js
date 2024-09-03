'use client';
import React from 'react';
import { Input } from '../shared/input';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from '../shared/button';
import { useRouter } from 'next/navigation';
import { PATH_LOGIN, PATH_REGISTER } from '@/helpers/Slugs';
import Link from 'next/link';

const RightNavItems = () => {
  const router = useRouter();
  return (
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
  );
};

export default RightNavItems;
