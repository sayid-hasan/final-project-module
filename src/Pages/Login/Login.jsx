import "./login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img1 from "../../assets/others/authentication2.png";
import { useEffect, useRef, useState } from "react";
const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
      <div className="hero min-h-screen background">
        <div className="background box-shadow min-h-[500px] flex justify-center items-center max-w-6xl md:px-10">
          <div className="hero-content flex-col lg:flex-row">
            <div className=" md:w-1/2 w-full ">
              <img src={img1} alt="" />
            </div>
            <div className="card shrink-0 md:w-1/2 w-full max-w-sm  bg-none">
              <h2 className="font-Inter font-bold text-center text-[40px] text-[#151515]">
                Login
              </h2>
              <form onSubmit={handleLogin} className="card-body font-Inter">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-[#444444] label-text text-xl font-semibold">
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
                    <span className="text-[#444444] label-text text-xl font-semibold">
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
                  <label className="label ">
                    <span className="text-[#444444]  label-text text-base font-medium ">
                      <LoadCanvasTemplate />
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the captcha"
                    name="captcha"
                    ref={captchaRef}
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                  />
                  <button
                    onClick={handleCaptcha}
                    className={`${
                      disabled ? "" : "hidden"
                    } btn btn-outline btn-xs w-[100px] mt-5`}
                  >
                    validate
                  </button>
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
              <p className="font-medium text-xl text-[#D1A054B3] text-center mb-3">
                New here ? Create a new Account
              </p>
              <div className="text-center  space-x-1">
                <p className="px-3 text-lg font-medium text-[#444444]">
                  or Login with
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
