import { Tags } from '@/components/shared/tags';
import { Typography } from '@/components/shared/typography';
import StarRating from '@/components/ui/rating/StarRating';
import { Avatar } from 'antd';
import React from 'react';

const PrimaryDetails = () => {
  return (
    <div>
      <Tags.Primary text="BCS" presets="green" className=" bg-success-light" />
      <div>
        <Typography.SubHeading className="font-bold">
          BCS Exam Prep 2023 Edition
        </Typography.SubHeading>
        <div className="flex gap-5 items-center">
          <Avatar />
          <div>
            <Typography.Text className="text-xs text-neutral-light">Examiner</Typography.Text>
            <Typography.Text className="font-semibold">Cristofer Jonas</Typography.Text>
          </div>
          <div>
            <Typography.Text className="text-xs text-neutral-light">Last Update</Typography.Text>
            <Typography.Text className="font-semibold">28 January, 2022</Typography.Text>
          </div>
          <div>
            <Typography.Text className="text-xs text-neutral-light">Review</Typography.Text>
            <StarRating rating={4} totalReviews={10} />
          </div>
        </div>

        <div className=' h-96 border mt-5'>
            img
        </div>
      </div>
    </div>
  );
};

export default PrimaryDetails;
