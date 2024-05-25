import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/Images/user.png";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../Hooks/useCart";

const Nav = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [carts] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  };

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
          to="/dashboard"
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
      {}
      {
        <>
          <li className="flex">
            {" "}
            <Link
              to={`/order/salad`}
              className={`flex items-center px-4 rounded-none  pt-4 uppercase text-base   font-Inter`}
            >
              Our shop
            </Link>
          </li>
        </>
      }
      {
        <>
          <li className="flex">
            {" "}
            <Link
              to={`/dashboard/cart`}
              className={`flex items-center px-4 rounded-none  pt-4 uppercase text-base   font-Inter relative mr-4`}
            >
              <div className="text-3xl">
                {" "}
                <TiShoppingCart />
              </div>
              <div className="badge bg-[#D1A054] absolute top-1/2 -translate-y-1/2 right-2 md:top-px md:-right-4">
                +{carts.length}
              </div>
            </Link>
          </li>
        </>
      }
    </>
  );

  const buttonProfile = (
    <>
      {/* buttons and user profile */}

      {/* <Link
          to="/login"
          className="self-center px-8 py-3 font-semibold rounded bg-[#D1A054] text-white"
        >
          Sign in
        </Link> */}
      <div className="items-center flex-shrink-0 text-black lg:flex mt-4">
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
                      <button onClick={handleLogOut}>Log out</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="self-center px-8 py-3 font-semibold rounded bg-[#D1A054] text-white"
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
              <p className="text-white leading-[43px] font-black text-xl md:text-3xl">
                BISTRO BOSS
              </p>
              <p className="text-white leading-[32px] font-bold md:tracking-[0.5em] md:text-2xl text-lg tracking-[0.25em] ">
                Restaurant
              </p>
            </h2>
          </Link>
        </div>
        <div className="navbar-end w-3/4 hidden lg:flex ">
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
