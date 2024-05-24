import "./login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img1 from "../../assets/others/authentication2.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SococialLogin from "../../components/SococialLogin/SococialLogin";
const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { logIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((res) => {
        console.log(res.user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.user?.displayName
            ? ` 'Welcome Back' ${res.user?.displayName}`
            : "logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  const handleCaptcha = () => {
    const userCaptcha = captchaRef.current.value;

    if (validateCaptcha(userCaptcha) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Log In</title>
      </Helmet>
      <div className="hero min-h-screen background">
        <div className="background box-shadow  flex justify-center items-center max-w-6xl md:px-10">
          <div className="hero-content flex-col lg:flex-row">
            <div className=" md:w-1/2 w-full ">
              <img src={img1} alt="" />
            </div>
            <div className="card shrink-0 md:w-1/2 w-full max-w-sm  bg-none">
              <form
                onSubmit={handleLogin}
                className="card-body gap-1 font-Inter"
              >
                <h2 className="font-Inter font-bold text-center text-[32px] text-[#151515]">
                  Login
                </h2>
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
                {/* captcha */}
                <div className="form-control  w-full">
                  <div className="label ">
                    <span className="text-[#444444]  label-text text-base font-medium ">
                      <LoadCanvasTemplate />
                    </span>
                  </div>
                  <input
                    type="text"
                    onBlur={handleCaptcha}
                    placeholder="Enter the captcha"
                    name="captcha"
                    ref={captchaRef}
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                  />
                  {/* <button
                    onClick={handleCaptcha}
                    className={`${
                      disabled ? "" : "hidden"
                    } btn btn-outline btn-xs w-[100px] mt-5`}
                  >
                    validate
                  </button> */}
                </div>
                <div className="form-control mt-6 w-full">
                  <input
                    disabled={disabled}
                    className="btn btn-primary border-none text-white bg-[#D1A054B3] text-xl font-bold"
                    type="submit"
                    value={"Login"}
                  />
                </div>
              </form>
              <p className="font-medium text-lg -mt-3 text-[#D1A054B3] text-center mb-3">
                New here ? <Link to="/signup">Create a new Account</Link>
              </p>
              <div className="text-center   space-x-1">
                <p className="px-3 text-lg -mt-3 font-medium text-[#444444]">
                  or Login with
                </p>
                {/* social login  */}
                <SococialLogin></SococialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
