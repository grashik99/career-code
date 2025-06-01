import Lottie from "lottie-react";
import lottieLogin from "../../assets/Lottie/login.json";
import { Link, useNavigate } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginExistUser } = use(AuthContext);
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginExistUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`User logedIn successful${user}`);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`An error happend ${(errorCode, errorMessage)}`);
      });
  };
  return (
    <div className="hero bg-base-200/50 my-4 md:py-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ">
          <Lottie animationData={lottieLogin}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <div className="relative z-50">
                <label className="label">Password</label>
                <input
                  type={showPass ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div className="absolute right-5 top-1/2 text-lg z-10">
                  <button type="button" onClick={showPassword}>
                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>
              <div>
                <Link to="/forgotPassword" className="link link-hover">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
            <div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-400">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
