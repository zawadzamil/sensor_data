import { Tags } from '@/components/shared/tags';
import { Typography } from '@/components/shared/typography';
import StarRating from '@/components/ui/rating/StarRating';
import { Avatar } from 'antd';
import React from 'react';
import PrimaryDetails from './PrimaryDetails';
import AddCart from '@/components/ui/cards/AddCart';
import { Tabs } from '@/components/shared/Tabs';
import CourseOverview from './CourseOverview';
import DetailsReview from './DetailsReview';

const Details = () => {
  const DetailsTab = [
    {
      key: 'Overview',
      label: 'Overview',
      children: <CourseOverview />,
    },
    {
      key: 'review',
      label: 'Review',
      children: <DetailsReview />,
    },
  ];
  return (
    <div className="page-container my-6">
      <div className="flex flex-row-reverse justify-between gap-2">
        <AddCart />
        <div className="w-2/3">
          <PrimaryDetails />

          <Tabs.Primary items={DetailsTab} tabBarClassName="mt-4 bg-neutral-extra-lite w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Details;
