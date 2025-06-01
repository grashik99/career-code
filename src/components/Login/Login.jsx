import Lottie from "lottie-react";
import lottieLogin from "../../assets/Lottie/login.json";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200/50 my-4 md:py-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ">
          <Lottie animationData={lottieLogin}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
          <div className="card-body">
            <form className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <Link to="/forgotPassword" className="link link-hover">Forgot password?</Link>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <div>
                <p>Don't have an account? <Link to="/register" className="text-blue-400">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
