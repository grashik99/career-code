import { Link } from "react-router";
import Links from "./Links";
import logo from "../../assets/fav.png";
import { Typewriter } from "react-simple-typewriter";
import { use } from "react";
import { AuthContext } from "../../Authentication/AuthContext";

const Navbar = () => {
  const { user, loading, Logout } = use(AuthContext);
  const logoutUser = () => {
    Logout()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(`An error happened.${error}`);
      });
  };
  return (
    <div className="navbar bg-base-100/80 shadow-lg rounded-xl">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Links />
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="logo" className="w-8" />
          Job
          <span className="text-blue-500">
            <Typewriter
              className
              words={["HUNT", "POST"]}
              loop={0}
              cursor={"|"}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </div>
      <div className="navbar-end space-x-1">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/myProfile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <button onClick={logoutUser}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              <>
                <Link className="btn" to="/login">
                  Login
                </Link>
                <Link className="btn hidden md:flex" to="/register">
                  Register
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
