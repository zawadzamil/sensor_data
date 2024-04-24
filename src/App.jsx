import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
import ModelTest from "./pages/ModelTest";
import PurchaseDetailsCourse from "./pages/PurchaseDetailsCourse";
import PurchaseBundle from "./pages/PurchesedBundles";
import TestResult from "./pages/TestResult";

function App() {
  return (
    <Fragment>
      <Routes>

        <Route path="/" element={<Layout><Home></Home></Layout>} />
        <Route path="/categories" element={<Layout><Categories /></Layout>} />
        <Route path="/course-details" element={<Layout><CourseDetails /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/my-purchased-bundles" element={<Layout><PurchaseBundle /></Layout>} />
        <Route path="/purchased-details-course" element={<Layout><PurchaseDetailsCourse /></Layout>} />
        <Route path="/test" element={<ModelTest />} />
        <Route path="/result" element={<TestResult />} />


      </Routes>

      {/* Website Title */}
      <div>
        <Helmet>
          <title>Model Test Online</title>
        </Helmet>

      </div>
    </Fragment>

  );
}

export default App;
