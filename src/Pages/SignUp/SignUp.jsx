import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";
import img1 from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="hero min-h-screen background">
        <div className="background box-shadow  flex justify-center items-center max-w-6xl md:px-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" md:w-1/2 w-full ">
              <img src={img1} alt="" />
            </div>
            <div className="card shrink-0 md:w-1/2 w-full max-w-sm  bg-none">
              <form className="card-body gap-1 font-Inter">
                <h2 className="font-Inter font-bold text-center text-[32px] text-[#151515]">
                  Sign Up
                </h2>
                {/* name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-[#444444] label-text text-lg font-medium">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="your Name"
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                    required
                  />
                </div>
                {/* email */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-[#444444] label-text text-lg font-medium">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your email"
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                    required
                  />
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="text-[#444444] label-text text-lg font-medium">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your password"
                    name="password"
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6 w-full">
                  <input
                    className="btn btn-primary border-none text-white bg-[#D1A054B3] text-xl font-bold"
                    type="submit"
                    value={"Sign Up"}
                  />
                </div>
              </form>
              <p className="font-medium text-lg -mt-3 text-[#D1A054B3] text-center mb-3">
                alredy have an account ? <Link to="/login">Sign in</Link>
              </p>
              <div className="text-center   space-x-1">
                <p className="px-3 text-lg -mt-3 font-medium text-[#444444]">
                  or Login with
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                  <button
                    aria-label="Log in with Google"
                    className="p-3 text-2xl h-12 aspect-square rounded-[50%] border border-black"
                  >
                    <CiFacebook />
                  </button>
                  <button
                    aria-label="Log in with Twitter"
                    className="p-3 text-2xl h-12 aspect-square rounded-[50%] border border-black"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    aria-label="Log in with GitHub"
                    className="p-3 text-2xl h-12 aspect-square rounded-[50%] border border-black"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
