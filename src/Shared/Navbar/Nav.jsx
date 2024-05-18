import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/Images/user.png";

const Nav = () => {
  const loading = false;
  const user = true;
  const navlinks = (
    <>
      <li className="flex">
        {" "}
        <Link
          to="/"
          className={` 
          flex items-center px-4 rounded-none pt-4 uppercase text-base   font-Inter `}
        >
          Home
        </Link>
      </li>
      <li className="flex">
        {" "}
        {
          <Link
            to="/"
            className={`  flex items-center px-4 rounded-none  pt-4 uppercase text-base  font-Inter`}
          >
            Contact Us
          </Link>
        }
      </li>
      <li className="flex">
        {" "}
        <Link
          to="/"
          className={`  flex items-center px-4 rounded-none  pt-4 uppercase text-base  font-Inter`}
        >
          Dashboard
        </Link>
      </li>
      {
        <>
          <li className="flex">
            {" "}
            <NavLink
              to="/menu"
              className={` flex items-center px-4 rounded-none  pt-4 uppercase text-base  font-Inter`}
            >
              Our Menu
            </NavLink>
          </li>
        </>
      }
      {
        <>
          <li className="flex">
            {" "}
            <Link
              to={``}
              className={`flex items-center px-4 rounded-none  pt-4 uppercase text-base   font-Inter`}
            >
              Our shop
            </Link>
          </li>
        </>
      }
    </>
  );

  const buttonProfile = (
    <>
      {/* buttons and user profile */}
      <div className="items-center flex-shrink-0 text-black lg:flex mt-4">
        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
        {loading ? (
          <>
            <span className="loading loading-spinner text-success"></span>
          </>
        ) : (
          <>
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    <div className="avatar online">
                      <div className="w-11 rounded-full">
                        <img src={user?.photoURL || logo} />
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/userprofile">
                        {user?.displayName || "user Name not found"}
                      </Link>
                    </li>
                    <li>
                      <button>Log out</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="self-center px-8 py-3 font-semibold rounded bg-[#F26767] text-white"
                >
                  Sign in
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 md:px-16 px-4 container mx-auto bg-[#15151580] text-white items-center md:items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link to="/" className="   text-3xl  font-Cinzel   h-auto min-h-0  ">
            <h2 className="">
              <p className="text-white leading-[43px] font-black text-3xl">
                BISTRO BOSS
              </p>
              <p className="text-white leading-[32px] font-bold tracking-[0.5em] text-2xl ">
                Restaurant
              </p>
            </h2>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal bg-transparent  px-1 ">
            {navlinks}
          </ul>
        </div>
        <div className="w-1/2 justify-end md:justify-center   md:w-min  z-[4]">
          {buttonProfile}
        </div>
      </div>
    </div>
  );
};

export default Nav;
