import { Button } from '@/components/shared/button';
import { Tabs } from '@/components/shared/Tabs';
import { Typography } from '@/components/shared/typography';
import Link from 'next/link';
import React, { Fragment } from 'react';
import CourseCard from '../cards/CourseCard';
import assets from '../../../assets/asset';
import { Tags } from '@/components/shared/tags';

const CompactBundler = ({ badge, title, isExplore, details, tabHeader = [] }) => {
  return (
    <div className="page-container my-10">
      <div className="">
        <Tags.Primary presets='white' className='pl-0 font-normal' text={badge} />
        <div className="flex justify-between items-center">
          <Typography.SubHeading>{title}</Typography.SubHeading>
          {isExplore && <Button.Outline>Explore all </Button.Outline>}
        </div>
      </div>
      <div className="details mt-4">
        <Typography.Text className="w-full text-neutral-light">{details}</Typography.Text>
      </div>

      <Tabs.Outline
        items={tabHeader.map((res, i) => {
          return {
            label: res,
            key: i,
            children: (
              <>
                <div className="course-card mt-6 grid grid-cols-3 gap-x-6  gap-y-16">
                  {[...Array(6)].map((_, index) => (
                    <Fragment key={index}>
                      <CourseCard
                        title="All In One - 2023 BCS Preparation Model test Bundle set."
                        price="199.00"
                        img={assets.course2}
                      ></CourseCard>
                    </Fragment>
                  ))}
                </div>
              </>
            ),
          };
        })}
      />
    </div>
  );
};

export default CompactBundler;
