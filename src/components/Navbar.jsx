import React from "react";

import Search from '../assets/icons/Search.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-start px-[120px] py-[16px] mb-3 bg-slate-700">
        <div className="container px-4 mx-auto flex  items-center justify-between ">
         <div className="flex">
         <div className="w-full relative flex lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-title_green"
              href="#pablo"
            >
              ModelTest.com
            </a>
            <button
              className="text-dark cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex   items-center" + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex justify-start items-center font-lato text-16 lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center   font-bold leading-24 text-dark hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2 font-title text-natural ">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center   font-bold leading-24 text-natural hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2 font-title text-natural flex items-center gap-2">
                    Categories
                    <span className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M13.825 7.1582L10 10.9749L6.175 7.1582L5 8.3332L10 13.3332L15 8.3332L13.825 7.1582Z"
                          fill="#101840"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center   font-title text-natural leading-24 text-dark hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-dark opacity-75"></i>
                  <span className="ml-2">Become an Examiner</span>
                </a>
              </li>
            </ul>
           
          </div>
         </div>
            {/* Search field */}
            <div className="right-contents">
            <div className="flex items-center ml-4">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            />
             <img src={Search} alt="Search Icon" className="ml-2 translate-x-2" />
          </div>
            </div>
        </div>
        
      </nav>
    </>
  );
}
