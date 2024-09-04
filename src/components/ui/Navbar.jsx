import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/asset";
import GreenButton from "./buttons/GreenButton";
import WhiteButton from "./buttons/WhiteButton";
import Title from "./header/Title";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-start px-[60px] py-[16px]  shadow-md">
        <div className="container px-4 mx-auto flex  items-center justify-between ">
          <div className="flex">
            <div className="w-full relative flex lg:w-auto lg:static lg:block lg:justify-start">

              <button
                className="text-dark cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
              <ul className="flex justify-start items-center font-lato  lg:flex-row list-none lg:ml-auto gap-4 ps-4 ">
                <li className="nav-item">
                  <a href="#">
                    <Link to='/'>
                      <Title >
                        Home
                      </Title>
                    </Link>

                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    <div className="category flex items-center gap-0">
                      <Link to='/PATH_CATEGORIES'>
                        <Title >
                          PATH_CATEGORIES
                        </Title>
                      </Link>
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
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    <Title>Become an Examiner</Title>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Search field */}
          <div className="right-contents">
            <div className="flex items-center ml-4 relative font-lato">
              <ul className="flex justify-start items-center gap-[36px]">
                <li className="flex justify-start items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-44 px-8 py-2 rounded border border-slate-400 hover:border-title_green "
                  />

                  <img
                    src={assets.searchIcon}
                    alt="Search Icon"
                    className="absolute ms-s px-3"
                  />
                </li>
                {/* My Tests */}
                {/* <li className="nav-item">
                  <a href="#">
                    <Title title="My Tests"></Title>
                  </a>
                </li> */}

                <li>
                  <div className="userInfo flex items-center gap-[24px]">
                    <Link to="/checkout">
                      <img
                        src={assets.cartIcon}
                        alt=""
                        className="relative flex w-[24px] h-[24px] nav-item "
                      />
                    </Link>
                    <Link to="customer-login" >
                      <GreenButton  >Login</GreenButton>
                    </Link>

                    <a href="#" className="nav-item">
                      <WhiteButton >Register Now</WhiteButton>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
