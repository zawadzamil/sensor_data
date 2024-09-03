import BannerSection from '@/components/home-sections/BannerSection';
import ServiceIconSection from '@/components/home-sections/ServiceIconSection';
import AboutSection from '@/components/home-sections/AboutSection';
import Head from 'next/head';
import { Button } from '@/components/shared/button';
import { Typography } from '@/components/shared/typography';
import UpcommingMovieSection from '@/components/home-sections/UpcommingMovieSection';
import Hero from '@/components/pages/home/Hero';
import Features from '@/components/pages/home/Features';
import BecomeExaminer from '@/components/pages/home/BecomeExaminer';
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
      <BecomeExaminer />
      <CompactBundler
        badge="Popular course"
        title="Give exam on the Trending Model-Tests."
        details=""
        tabHeader={['BCS', 'Bank jobs', 'Admission Exam']}
        isExplore={true}
      />
    </div>
  );
};

export default Home;
