import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Categories from "./pages/Categories";
import Checkout from "./pages/Checkout";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
import PurchaseDetailsCourse from "./pages/PurchaseDetailsCourse";
import PurchesedBundles from "./pages/PurchesedBundles";

const routes = (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path="/categories"
      element={
        <Layout>
          <Categories />
        </Layout>
      }
    />

    <Route
      path="/course-details"
      element={
        <Layout>
          <CourseDetails />
        </Layout>
      }
    />
    <Route
      path="/checkout"
      element={
        <Layout>
          <Checkout />
        </Layout>
      }
    />

    <Route
      path="/my-purchased-bundles"
      element={
        <Layout>
          <PurchesedBundles />
        </Layout>
      }
    />

    <Route
      path="/purchased-details-course"
      element={
        <Layout>
          <PurchaseDetailsCourse />
        </Layout>
      }
    />
  </Routes>
);

export default routes;
