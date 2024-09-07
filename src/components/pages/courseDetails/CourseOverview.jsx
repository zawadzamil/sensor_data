import { Accordion } from '@/components/shared/accordion';
import { Typography } from '@/components/shared/typography';
import React from 'react';

const CourseOverview = () => {
  const insideBundles = [
    {
      key: '1',
      label: (
        <span>
          <span className="font-bold mr-1">Comprehensive Subject Coverage:</span>
          <span>
            Gain insights into the specific subjects and topics that constitute the BCS exam,
            ensuring focused preparation.
          </span>
        </span>
      ),
      children: (
        <Typography.Text>
          Gain insights into the specific subjects and topics that constitute the BCS exam, ensuring
          focused preparation.
        </Typography.Text>
      ),
    },
    {
      key: '2',
      label: (
        <span>
          <span className="font-bold mr-1">Comprehensive Subject Coverage:</span>
          <span>
            Gain insights into the specific subjects and topics that constitute the BCS exam,
            ensuring focused preparation.
          </span>
        </span>
      ),
      children: (
        <Typography.Text>
          Gain insights into the specific subjects and topics that constitute the BCS exam, ensuring
          focused preparation.
        </Typography.Text>
      ),
    },
    {
      key: '3',
      label: (
        <span>
          <span className="font-bold mr-1">Comprehensive Subject Coverage:</span>
          <span>
            Gain insights into the specific subjects and topics that constitute the BCS exam,
            ensuring focused preparation.
          </span>
        </span>
      ),
      children: (
        <Typography.Text>
          Gain insights into the specific subjects and topics that constitute the BCS exam, ensuring
          focused preparation.
        </Typography.Text>
      ),
    },
  ];

  const bundleContent = [
    {
      key: '1',
      label: 'Test 1: Bangla',
      children: (
        <div className='flex justify-between items-center'>
          <Typography.Text>
            Exam Duration: <span className="text-danger">01:15:00</span>
          </Typography.Text>

          <Typography.Text className="text-primary">Start Test</Typography.Text>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Test 2: English',
      children: (
        <div className='flex justify-between items-center'>
          <Typography.Text>
            Exam Duration: <span className="text-danger">01:15:00</span>
          </Typography.Text>

          <Typography.Text className="text-primary">Start Test</Typography.Text>
        </div>
      ),
    },
    {
      key: '3',
      label: 'Test 3: Math',
      children: (
        <div className='flex justify-between items-center'>
          <Typography.Text>
            Exam Duration: <span className="text-danger">01:15:00</span>
          </Typography.Text>

          <Typography.Text className="text-primary">Start Test</Typography.Text>
        </div>
      ),
    },
    {
      key: '4',
      label: 'Test 4: All Subjects',
      children: (
        <div className='flex justify-between items-center'>
          <Typography.Text>
            Exam Duration: <span className="text-danger">01:15:00</span>
          </Typography.Text>

          <Typography.Text className="text-primary">Start Test</Typography.Text>
        </div>
      ),
    },
  ];

  return (
    <div className='mb-24'>
      <Typography.SubHeading className="text-xl text-neutral-light font-bold mt-10">
        Overview
      </Typography.SubHeading>
      <Typography.Text className="text-sm text-neutral-light">
        Elevate your BCS exam preparation with our online model tests. Immerse yourself in a
        comprehensive and dynamic study experience tailored specifically for BCS examinations.
        Access realistic simulations, a rich question bank, and instant performance analysis to
        ensure you're ready to conquer the BCS exam with confidence. Sharpen your skills, track your
        progress, and embrace success with our dedicated BCS exam preparation platform.
      </Typography.Text>

      <Typography.SubHeading className="text-xl text-neutral-light font-bold">
        {'What’s included inside the bundle?'}
      </Typography.SubHeading>

      <Accordion.Primary items={insideBundles} />

      <Typography.SubHeading className="text-xl text-neutral-light font-bold mt-16 mb-6">
        Bundle Content
      </Typography.SubHeading>
      <Accordion.Outline items={bundleContent} />
    </div>
  );
};

export default CourseOverview;
