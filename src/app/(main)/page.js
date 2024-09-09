import BecomeExaminer from '@/components/pages/home/BecomeExaminer';
import Features from '@/components/pages/home/Features';
import Hero from '@/components/pages/home/Hero';
import Category from '@/components/ui/Catrgory';
import CompactBundler from '@/components/ui/sections/CompactBundler';
import { GET_ALL_BUNDLE_HOMEPAGE_API_URL } from '@/helpers/apiUrl';
import { getBestRatedCourses } from '@/helpers/utils';
import { dataFetcher } from '@/providers/ServerCall';

// export const metadata = {
//     title: "Home",
//     description: "Home page",
//     keywords: "Home",
//     openGraph: {
//         metadataBase: new URL("http://localhost:3000"),
//         title: "Home",
//         description: 'Home page',
//         siteName: "STS",
//         images: [],
//         type: "article",
//         url: ""
//     },
//     manifest:"./manifest.json",

// }

export const viewport = {
  themeColor: 'black',
};

const Home = async () => {
  const popular = await dataFetcher({
    url: `${GET_ALL_BUNDLE_HOMEPAGE_API_URL}?section=POPULAR`,
    options: {
      cache: 'no-store',
    },
    requireAuth: false,
  });

  const top_rated = await dataFetcher({
    url: `${GET_ALL_BUNDLE_HOMEPAGE_API_URL}?section=TOP_RATED`,
    options: {
      cache: 'no-store',
    },
    requireAuth: false,
  });

  const free = await dataFetcher({
    url: `${GET_ALL_BUNDLE_HOMEPAGE_API_URL}?section=FREE`,
    options: {
      cache: 'no-store',
    },
    requireAuth: false,
  });

  // TODO: App call is following bad approaches
  return (
    <div>
      <Hero />
      <Features />
      <CompactBundler
        badge="Popular course"
        title="Give exam on the Trending Model-Tests."
        details=""
        tabHeader={Object.keys(popular?.data)}
        isExplore={false}
        allowTab={true}
        data={popular?.data}
      />
      <Category />

      <CompactBundler
        badge="100% Free"
        title="Get Bank job-ready for an in-demand career"
        details="Gain the skills and confidence needed to stand out in the competitive job market and embark on a successful journey toward an in-demand banking career."
        isExplore={true}
        allowTab={false}
        data={getBestRatedCourses(free?.data)}
      />
      <BecomeExaminer />

      <CompactBundler
        badge="Top Rated Tests"
        title="Explore Top Model Test Exams"
        details="Dive into our curated selection of top-tier model tests, meticulously designed to elevate your preparation."
        tabHeader={Object.keys(top_rated?.data)}
        isExplore={false}
        allowTab={true}
        data={top_rated?.data}
      />
    </div>
  );
};

export default Home;
