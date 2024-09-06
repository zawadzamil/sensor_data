'use client';
import { Tabs } from '@/components/shared/Tabs';
import { Button } from '@/components/shared/button';
import { Tags } from '@/components/shared/tags';
import { Typography } from '@/components/shared/typography';
import { PATH_DETAILS } from '@/helpers/Slugs';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import assets from '../../../assets/asset';
import CourseCard from '../cards/CourseCard';

const CompactBundler = ({
  badge,
  title,
  isExplore,
  details,
  tabHeader = [],
  allowTab = true,
}) => {
  const router = useRouter();
  return (
    <div className="page-container my-20">
      <div className="">
        <Tags.Primary
          presets="white"
          className="pl-0 font-normal"
          text={badge}
        />
        <div className="flex justify-between items-center">
          <Typography.SubHeading>{title}</Typography.SubHeading>
          {isExplore && <Button.Outline>Explore all </Button.Outline>}
        </div>
      </div>
      <div className="details mt-4">
        <Typography.Text className="w-full text-neutral-light text-md">
          {details}
        </Typography.Text>
      </div>

      {allowTab ? (
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
                          onClick={() =>
                            router.push(`${PATH_DETAILS}/${index}`)
                          }
                          className="cursor-pointer"
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
      ) : (
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
      )}
    </div>
  );
};

export default CompactBundler;
