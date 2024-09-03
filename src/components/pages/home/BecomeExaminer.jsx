import { Fragment } from 'react';
import Heading from '../../ui/headings/Heading';
import Subtitle from '../../shared/typography/SubHeading';
import { Button } from '@/components/shared/button';
import assets from '../../../assets/asset';
import { Typography } from '@/components/shared/typography';

export default function BecomeExaminer() {
  return (
    <Fragment>
      <section className="page-container py-[6.25rem] mt-[6.25rem] flex justify-between bg-success-light">
        <div className="text flex flex-col gap-6">
          <Typography.SubHeading>Become An Examiner</Typography.SubHeading>
          <Typography.Text className="text-neutral-light">
            Join one of the largest online Model Test giving platform.
          </Typography.Text>
          <div className="button mt-4">
            <Button.Primary>Become an Examiner</Button.Primary>
          </div>
        </div>
        <div className="images flex gap-5">
          <div className="w-[15rem] h-[9.69rem] mt-32 ">
            <figure>
              <img src={assets.book} className="object-cover" alt="" />
            </figure>
          </div>
          <div className="w-[10rem] h-[11rem] mt-8 ">
            <figure>
              <img src={assets.books} className="object-cover" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
