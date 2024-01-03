import Footer from "./Footer";
import Navbar from "./Navbar";


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
        {/* Your header content */}
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;