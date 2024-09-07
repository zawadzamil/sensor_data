import { Icons } from '@/assets/icons';
import { Typography } from '@/components/shared/typography';
import { PATH_CATEGORIES, PATH_DETAILS, PATH_HOME } from '@/helpers/Slugs';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import React, { Fragment } from 'react';

const PageHeader = ({breadcrumbItems, heading }) => {
   breadcrumbItems = breadcrumbItems? breadcrumbItems : [
    { title: 'Home', path: PATH_HOME },
    { title: 'Categories', path: PATH_CATEGORIES },
    { title: 'Bundle Details ', path: PATH_DETAILS +'/1' },
  ];
  return (
    <Fragment>
      <div className="h-64 bg-gray-light flex items-center">
        <div className=" flex items-center page-container justify-between">
        <div className="">
          <Breadcrumb>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link href={item.path}>{item.title}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>

          <Typography.Heading className='mt-4'> {heading ? heading : 'Section Heading'} </Typography.Heading>
        </div>
        <div className="globe">
            <Icons.Globe />
        </div>
        </div>
        
      </div>
    </Fragment>
  );
};

export default PageHeader;
