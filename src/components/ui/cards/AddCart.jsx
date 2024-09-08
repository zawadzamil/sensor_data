import { Button } from '@/components/shared/button';
import { Typography } from '@/components/shared/typography';
import React from 'react';
import StarRating from '../rating/StarRating';
import { Tags } from '@/components/shared/tags';
import Image from 'next/image';
import assets from '@/assets/asset';
import { Icons } from '@/assets/icons';

const AddCart = () => {
  return (
    <div className="w-[356px] h-fit p-6 shadow-md ">
      <div className="h-[188px] border relative">
        <Image
          src={assets.course2}
          layout="fill"
          objectFit="cover"
          alt="Course Image"
          style={{ borderRadius: '5%' }}
        />
      </div>
      <div className="flex gap-4  my-4 items-center">
        <Typography.SubHeading className="text-[32px] font-bold text-neutral ">
          $246.00
        </Typography.SubHeading>

        <Typography.SubHeading className="text-xl font-bold text-secondary ">
          <del>$300.00</del>
        </Typography.SubHeading>
      </div>

      <Button.Primary className="w-full">
        <Icons.ShopingCart></Icons.ShopingCart> Add to Cart
      </Button.Primary>

      <Typography.Text className="text-success font-bold text-xl mt-6">
        BCS Exam Prep 2023 Edition
      </Typography.Text>

      <div className="mt-6">
        <div className="flex justify-between items-center gap-2  py-4 border-b-2">
          <Typography.Text className="flex gap-2">
            <Icons.UserSVG></Icons.UserSVG> Examiner
          </Typography.Text>

          <Typography.Text className="font-bold text-primary underline">
            Cristofer Jonas
          </Typography.Text>
        </div>

        <div className="flex justify-between items-center gap-2  py-4 border-b-2">
          <Typography.Text className="flex gap-2">
            <Icons.RefreshSVG></Icons.RefreshSVG>Last Update
          </Typography.Text>
          <Typography.Text className="font-semibold text-primary">
            28 January, 2022
          </Typography.Text>
        </div>

        <div className="flex justify-between items-center gap-2  py-4 border-b-2">
          <Typography.Text className="flex gap-2">
            <Icons.TimeSVG></Icons.TimeSVG> Duration
          </Typography.Text>
          <Typography.Text className="font-semibold text-primary">
            20:12:51 Hrs
          </Typography.Text>
        </div>

        <div className="flex justify-between items-center gap-2  py-4 border-b-2">
          <Typography.Text className="flex gap-2">
            <Icons.GraduationCap></Icons.GraduationCap> Enroll
          </Typography.Text>
          <Typography.Text className="font-semibold text-primary">
            258,00,00
          </Typography.Text>
        </div>

         <div className="flex justify-between items-center gap-2  py-4 border-b-2">
          <Typography.Text className="flex gap-2 ">
            <Icons.StarSVG></Icons.StarSVG> Review</Typography.Text>
          <StarRating rating={4} totalReviews={40} />
        </div>
      </div>

      <div className='mt-8'>
        <Typography.Text className="font-bold mb-4">Tags</Typography.Text>
        <div className="flex gap-2">
          <Tags.Primary text="BCS" presets="neutral" className="bg-neutral-extra-lite text-secondary text-sm" />
          <Tags.Primary text="Bank job" presets="neutral"  className="bg-neutral-extra-lite text-secondary text-sm" />
        </div>
      </div>
    </div>
  );
};

export default AddCart;
