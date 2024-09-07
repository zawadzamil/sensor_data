'use client';
import CourseDetails from '@/components/pages/CourseDetails';
import Details from '@/components/pages/courseDetails/Details';
import PageHeader from '@/components/ui/page-header/PageHeader';
import { PATH_CATEGORIES, PATH_DETAILS, PATH_HOME } from '@/helpers/Slugs';

const MovieDetails = ({ params }) => {
  return (
    <>
    <PageHeader 
    breadcrumbItems={[
    { title: 'Home', path: PATH_HOME },
    { title: 'Categories', path: PATH_CATEGORIES },
    { title: 'Bundle Details ', path: PATH_DETAILS +'/1' },
  ]} 
    heading="Bundle Details"/>
      <Details/>
    </>
  );
};

export default MovieDetails;
