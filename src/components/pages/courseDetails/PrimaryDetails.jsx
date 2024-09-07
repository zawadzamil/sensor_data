import assets from '@/assets/asset';
import { Tags } from '@/components/shared/tags';
import { Typography } from '@/components/shared/typography';
import StarRating from '@/components/ui/rating/StarRating';
import { Avatar } from 'antd';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const PrimaryDetails = ({ className }) => {
  return (
    <div className={twMerge('', className)}>
      <Tags.Primary
        text="BCS"
        presets="green"
        className=" bg-success-light font-semibold px-3 py-1 text-sm"
      />
      <div className="mt-4">
        <Typography.SubHeading className="font-bold text-secondary-dark">
          BCS Exam Prep 2023 Edition
        </Typography.SubHeading>
        <div className="flex gap-10 items-center mt-2">
          <div className="flex gap-4 items-center">
            <Avatar />
            <div className="r">
              <Typography.Text className="text-xs text-neutral-light">
                Examiner
              </Typography.Text>
              <Typography.Text className="font-semibold text-secondary-dark">
                Cristofer Jonas
              </Typography.Text>
            </div>
          </div>
          <div>
            <Typography.Text className="text-xs text-neutral-light">
              Last Update
            </Typography.Text>
            <Typography.Text className="font-semibold">
              28 January, 2022
            </Typography.Text>
          </div>
          <div>
            <Typography.Text className="text-xs text-neutral-light">
              Review
            </Typography.Text>
            <StarRating rating={4} totalReviews={10} />
          </div>
        </div>

        <div className="relative h-96 border mt-5">
          <Image
            src={assets.course2}
            layout="fill"
            objectFit="cover" // Options: cover, contain, fill, etc.
            alt="Course Image"
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryDetails;
