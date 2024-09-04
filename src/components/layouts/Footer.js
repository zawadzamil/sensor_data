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
        <div className="top_footer flex justify-between p-9 shadow-md mt-4">
          <div className="logo">
            <a href={PATH_HOME}>
              <span className="text-title_green text-[24px] font-lato leading-[32px] font-[800] ">
                Model
              </span>
              <span className="text-slate-500 text-3xl font-extrabold font-lato leading-loose">
                Test
              </span>
              <span className="text-zinc-800 text-base font-semibold font-lato leading-normal tracking-wide">
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
            <Typography.Text>About</Typography.Text>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              PATH_CATEGORIES
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Model Tests
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Careers
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">Jobs</span>
          </div>

          <div className="about flex flex-col gap-5">
            <Typography.Text>Support</Typography.Text>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Contact Us
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Online Chat
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Whats App
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Facebook
            </span>
          </div>

          <div className="about flex flex-col gap-5">
            <Typography.Text>Terms</Typography.Text>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Privacy Policy
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Cookies Settings
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Sitemap
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Accessibility Statement{' '}
            </span>
          </div>

          <div className="about flex flex-col gap-5">
            <Typography.Text>FAQ</Typography.Text>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Account
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Manage Deliveries
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Payments
            </span>
            <span className="font-lato leading-6 text-natural text-[1rem] font-normal">
              Returns{' '}
            </span>
          </div>
        </div>
      </div>
      <div className="bottomFooter  bg-natural ">
        <div className="content myContainer p-6 flex justify-between items-center">
          <div className="items flex gap-10">
            <span className="font-lato leading-6 text-white text-[1rem] font-normal">About Us</span>
            <span className="font-lato leading-6 text-white text-[1rem] font-normal">
              PATH_CATEGORIES
            </span>
            <span className="font-lato leading-6 text-white text-[1rem] font-normal">
              Privacy policy
            </span>
            <span className="font-lato leading-6 text-white text-[1rem] font-normal">Sitemap</span>
            <span className="font-lato leading-6 text-white text-[1rem] font-normal">
              Terms of Use
            </span>
          </div>
          <div className="signature">
            <div className="text-white text-sm font-normal font-lato leading-tight tracking-wide">
              © 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
