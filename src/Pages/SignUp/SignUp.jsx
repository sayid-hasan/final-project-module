import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";
import img1 from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, name, photourl } = data;
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser(name, photourl).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sign up successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate("/");
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | sign up</title>
      </Helmet>
      <div className="hero min-h-screen background">
        <div className="background box-shadow  flex justify-center items-center max-w-6xl md:px-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" md:w-1/2 w-full ">
              <img src={img1} alt="" />
            </div>
            <div className="card shrink-0 md:w-1/2 w-full max-w-sm  bg-none">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body gap-1 font-Inter"
              >
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
                    {...register("name", { required: true })}
                    placeholder="your Name"
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-red-600 font-medium text-sm">
                      name is required
                    </span>
                  )}
                </div>
                {/* photoUrl */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-[#444444] label-text text-lg font-medium">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("photourl", { required: true })}
                    placeholder="your Name"
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                  />
                  {errors.photourl?.type === "required" && (
                    <span className="text-red-600 font-medium text-sm">
                      Photo URL is required
                    </span>
                  )}
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
                    {...register("email", { required: true })}
                    placeholder="your email"
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                    required
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-600 font-medium text-sm">
                      Email is required
                    </span>
                  )}
                </div>
                {/* pass */}
                <div className="form-control relative w-full">
                  <label className="label">
                    <span className="text-[#444444] label-text text-lg font-medium">
                      Password
                    </span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter Your password"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      minLength: 6,
                    })}
                    name="password"
                    className="input input-bordered placeholder:text-[#A1A1A1]"
                  />

                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-1/2 -translate-y-2 right-2  text-2xl"
                  >
                    {showPass ? (
                      <MdVisibilityOff></MdVisibilityOff>
                    ) : (
                      <MdVisibility></MdVisibility>
                    )}
                  </div>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div>
                  {" "}
                  {errors.password?.type === "required" && (
                    <span className="text-red-600 font-medium text-sm">
                      Password is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600 font-medium text-sm">
                      Password must be 6 character
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600 font-medium text-sm">
                      Password must have one Uppercase , one lower case , one
                      degit, one special character
                    </span>
                  )}
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
