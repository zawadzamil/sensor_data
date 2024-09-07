import { Button } from '@/components/shared/button';
import { Typography } from '@/components/shared/typography';
import { PATH_CATEGORIES } from '@/helpers/Slugs';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Hero() {
  return (
    <Fragment>
      <div className="hero w-full h-[720px] flex flex-col items-center ">
        <div className="page-container">
          <div className="pt-[182px] flex w-full text-center justify-center">
            <div>
              <Typography.Heading className="text-primary">Exam Mastery Hub:</Typography.Heading>
              <Typography.Heading className="">
                Master Your Exams with our Online Model Tests
              </Typography.Heading>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <Typography.Text className="text-secondary-light text-lg">
              Sharpen your skills and elevate your success through realistic online model tests.
            </Typography.Text>
          </div>
          <div className="mt-16 flex justify-center items-center gap-4">
            <Link href={PATH_CATEGORIES}>
              <Button.Primary>View Model Tests</Button.Primary>
            </Link>
            <Link href={PATH_CATEGORIES}>
              <Button.Outline className="!bg-transparent">Explore categories</Button.Outline>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
