import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SococialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      if (res.user?.photoURL) {
        navigate(from);
      }
    });
  };
  return (
    <div>
      <div className="divider "></div>
      <div className="flex justify-center space-x-4 mt-2">
        <button
          aria-label="Log in with Google"
          className="p-3 text-2xl h-12 aspect-square rounded-[50%] border border-black"
        >
          <CiFacebook />
        </button>
        <button
          onClick={handleGoogleSignIn}
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
  );
};

export default SococialLogin;
