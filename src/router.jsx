import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

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
  </Routes>
);

export default routes;
