import { PATH_HOME } from '@/helpers/Slugs';
import { Fragment } from 'react';
import { Button } from '../shared/button';
import { Input } from '../shared/input';
import { Typography } from '../shared/typography';

export default function Footer() {
  return (
    <Fragment>
      <div className="myContainer pb-12">
        {/* Top Footer Section */}
        <div className="top_footer flex justify-between items-center p-9 shadow-md mt-4">
          <div className="logo">
            <a href={PATH_HOME}>
              <span className="text-primary-dark text-3xl leading-[32px] font-[800] ">
                Model
              </span>
              <span className="text-zinc-800 text-3xl font-extrabold  leading-loose">
                Test
              </span>
              <span className="text-zinc-800 text-base font-semibold  leading-normal tracking-wide">
                .com
              </span>
            </a>
          </div>

          <div className="input_field flex gap-4">
            <div className="w-[360px] h-[52px] flex-col justify-start items-start gap-2 inline-flex">
              {/* <div className="w-[360px] p-4 rounded border border-slate-300 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-indigo-950 text-sm font-normal font-['Lato'] leading-tight tracking-wide">
                  Enter your email
                </div>
              </div> */}
              <Input.Text placeholder="Enter your email" className="w-full"/>
            </div>
            <Button.Primary>Subscribe</Button.Primary>
          </div>
        </div>

        <div className="bottomNavigation flex justify-between mt-12">
          <div className="about flex flex-col gap-5">
            <Typography.Text className="font-semibold text-secondary-dark">About</Typography.Text>
            <Typography.Text className=" font-normal">
              Categories
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Model Tests
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Careers
            </Typography.Text>
            <Typography.Text className=" font-normal">Jobs</Typography.Text>
          </div>

          <div className="about flex flex-col gap-5">
          <Typography.Text className="font-semibold text-secondary-dark">Support</Typography.Text>
            <Typography.Text className=" font-normal">
              Contact Us
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Online Chat
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Whats App
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Facebook
            </Typography.Text>
          </div>

          <div className="about flex flex-col gap-5">
          <Typography.Text className="font-semibold text-secondary-dark">Terms</Typography.Text>
            <Typography.Text className=" font-normal">
              Privacy Policy
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Cookies Settings
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Sitemap
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Accessibility Statement{' '}
            </Typography.Text>
          </div>

          <div className="about flex flex-col gap-5">
          <Typography.Text className="font-semibold text-secondary-dark">FAQ</Typography.Text>
            <Typography.Text className=" font-normal">
              Account
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Manage Deliveries
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Payments
            </Typography.Text>
            <Typography.Text className=" font-normal">
              Returns{' '}
            </Typography.Text>
          </div>
        </div>
      </div>
      <div className="bottomFooter  bg-blue-dark">
        <div className="content myContainer p-6 flex justify-between items-center">
          <div className="items flex gap-10">
            <Typography.Text className="text-white font-normal">About Us</Typography.Text>
            <Typography.Text className="text-white font-normal">
              Categories
            </Typography.Text>
            <Typography.Text className="text-white font-normal">
              Privacy policy
            </Typography.Text>
            <Typography.Text className="text-white font-normal">Sitemap</Typography.Text>
            <Typography.Text className="text-white font-normal">
              Terms of Use
            </Typography.Text>
          </div>
          <div className="signature">
            <div className="">
              <Typography.Text className="text-white">© 2023, All Rights Reserved</Typography.Text>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
