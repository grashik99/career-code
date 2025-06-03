import Navbar from "../shared/Navbar";
import bg from "../../assets/bg.jpg";
import errorImg from "../../assets/error.png";

const Error = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto pt-4">
        <Navbar></Navbar>
        <div className="w-full flex mt-20">
          <div className="ml-auto">
            <img src={errorImg} alt="error" />
          </div>
        </div>

        <h1 className="text-center text-4xl font-medium text-white bg-red-900/40 p-10 rounded-3xl">
          Page not Found!
        </h1>
      </div>
    </div>
  );
};
export default Error;
