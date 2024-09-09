import { Tabs } from '@/components/shared/Tabs';
import AddCart from '@/components/ui/cards/AddCart';
import CourseOverview from './CourseOverview';
import DetailsReview from './DetailsReview';
import PrimaryDetails from './PrimaryDetails';

const Details = ({data}) => {
  // console.log('data', data);
  const DetailsTab = [
    {
      key: 'Overview',
      label: 'Overview',
      children: <CourseOverview />,
    },
    {
      key: 'review',
      label: 'Review',
      children: <DetailsReview />,
    },
  ];
  return (
    <div className="page-container my-6 mt-20 ">
      <div className="flex flex-row-reverse justify-between gap-2">
        <AddCart />
        <div className="w-2/3">
          <PrimaryDetails className="mb-12" />

          <Tabs.Primary
            items={DetailsTab}
            tabBarClassName="mt-4 bg-neutral-extra-lite w-fit"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
