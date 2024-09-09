'use client';
import CourseDetails from '@/components/pages/CourseDetails';
import Details from '@/components/pages/courseDetails/Details';
import PageHeader from '@/components/ui/page-header/PageHeader';
import { useGetAllData } from '@/globalHooks/useGetAllData';
import useGetSingleData from '@/globalHooks/useGetSingleData';
import { GET_BUNDLE_API_URL } from '@/helpers/apiUrl';
import { PATH_CATEGORIES, PATH_DETAILS, PATH_HOME } from '@/helpers/Slugs';
import api from '@/providers/Api';

const BundleDetails = () => {
  const { data, loading } = useGetSingleData(GET_BUNDLE_API_URL);
  console.log('data Here', data);
  return (
    <>
      <PageHeader
        breadcrumbItems={[
          { title: 'Home', path: PATH_HOME },
          { title: 'Categories', path: PATH_CATEGORIES },
          { title: 'Bundle Details ', path: PATH_DETAILS + '/1' },
        ]}
        heading="Bundle Details"
      />
      <Details data={data} />
    </>
  );
};

export default BundleDetails;
