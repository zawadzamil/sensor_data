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
import React from 'react';
import Slots from "@/components/pages/dealer-dashboard/Slots";

const Home = () => {
  return (
      <Slots/>
  );
};

export default Home;

