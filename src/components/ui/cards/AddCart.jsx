import { Button } from '@/components/shared/button';
import { Typography } from '@/components/shared/typography';
import React from 'react';
import StarRating from '../rating/StarRating';
import { Tags } from '@/components/shared/tags';
import Image from 'next/image';
import assets from '@/assets/asset';

const AddCart = () => {
  return (
    <div className="w-[356px] p-4 shadow-lg">
      <div className="h-[188px] border relative">
        <Image
          src={assets.course2}
          layout="fill"
          objectFit="cover" 
          alt="Course Image"
        />
      </div>
      <Typography.SubHeading className="text-[32px] font-bold">
        $246.00
      </Typography.SubHeading>
      <Button.Primary className="w-full">Add to Cart</Button.Primary>
      <Typography.Text className="text-primary font-bold text-[24px]">
        BCS Exam Prep 2023 Edition
      </Typography.Text>

      <div>
        <div className="flex justify-between items-center gap-2">
          <Typography.Text className="">Examiner</Typography.Text>
          <Typography.Text className="font-bold text-primary underline">
            Cristofer Jonas
          </Typography.Text>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Typography.Text className="">Last Update</Typography.Text>
          <Typography.Text className="font-semibold text-primary">
            28 January, 2022
          </Typography.Text>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Typography.Text className="">Duration</Typography.Text>
          <Typography.Text className="font-semibold text-primary">
            20:12:51 Hrs
          </Typography.Text>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Typography.Text className="">Enroll</Typography.Text>
          <Typography.Text className="font-semibold text-primary">
            258,00,00
          </Typography.Text>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Typography.Text className="">Review</Typography.Text>
          <StarRating rating={4} totalReviews={40} />
        </div>
      </div>

      <div>
        <Typography.Text className="font-semibold">Tags</Typography.Text>
        <div className="flex gap-2">
          <Tags.Primary text="BCS" presets="neutral" />
          <Tags.Primary text="Bank job" presets="neutral" />
        </div>
      </div>
    </div>
  );
};

export default AddCart;
