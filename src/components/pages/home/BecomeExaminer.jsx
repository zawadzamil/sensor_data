import { Icons } from '@/assets/icons';
import { Button } from '@/components/shared/button';
import { Typography } from '@/components/shared/typography';
import { Fragment } from 'react';

export default function BecomeExaminer() {
  return (
    <Fragment>
      <section className=" py-[6.25rem] mt-[6.25rem] flex justify-between bg-success-light">
        <div className="page-container flex justify-between items-center">
          <div className="text flex flex-col gap-6">
            <Typography.Heading>Become An Examiner</Typography.Heading>
            <Typography.Text className="text-neutral-light text-md">
              Join one of the largest online Model Test giving platform.
            </Typography.Text>
            <div className="button mt-4">
              <Button.Primary>Become an Examiner</Button.Primary>
            </div>
          </div>
          <div className="images flex gap-5">
            <div className="w-[15rem] h-[9.69rem] mt-32 ">
              <figure>
                <Icons.book />
              </figure>
            </div>
            <div className="w-[10rem] h-[11rem] mt-8 ">
              <figure>
                <Icons.books />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
