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
      <footer>
        {/* Your footer content */}
        <h5>this is footer</h5>
      </footer>
    </div>
  );
};

export default Layout;