import BecomeExaminer from '@/components/pages/home/BecomeExaminer';
import Features from '@/components/pages/home/Features';
import Hero from '@/components/pages/home/Hero';
import Category from '@/components/ui/Catrgory';
import CompactBundler from '@/components/ui/sections/CompactBundler';

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

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CompactBundler
        badge="Popular course"
        title="Give exam on the Trending Model-Tests."
        details=""
        tabHeader={['BCS', 'Bank jobs', 'Admission Exam']}
        isExplore={false}
        allowTab={true}
      />
      <Category />

      <CompactBundler
        badge="100% Free"
        title="Get Bank job-ready for an in-demand career"
        details="Gain the skills and confidence needed to stand out in the competitive job market and embark on a successful journey toward an in-demand banking career."
        tabHeader={['BCS', 'Bank jobs', 'Admission Exam']}
        isExplore={true}
        allowTab={false}
      />
      <BecomeExaminer />

    </div>
  );
};

export default Home;
