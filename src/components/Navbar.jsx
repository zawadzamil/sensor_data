import React from "react";
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
              <a href="#pablo">
                <span className="text-title_green text-[24px] font-lato leading-[32px] font-[800] ">
                  Model
                </span>
                <span className="text-slate-500 text-2xl font-extrabold font-lato leading-loose">
                  Test
                </span>
                <span className="text-zinc-800 text-base font-semibold font-lato leading-normal tracking-wide">
                  .com
                </span>
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
              <ul className="flex justify-start items-center font-lato  lg:flex-row list-none lg:ml-auto gap-4 ps-4 ">
                <li className="nav-item">
                  <a href="#">
                    <Title title="Home"></Title>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    <div className="category flex items-center gap-0">
                      <Title title="Categories"></Title>
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
                    <Title title="Become an Examiner"></Title>
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
                    <img
                      src={assets.cartIcon}
                      alt=""
                      className="relative flex w-[24px] h-[24px] nav-item "
                    />
                    <a href="#" className="nav-item">
                      <GreenButton title="Login" py="8px"></GreenButton>
                    </a>

                    <a href="#" className="nav-item">
                      <WhiteButton title="Register Now"></WhiteButton>
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
