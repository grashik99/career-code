import { Outlet } from "react-router";
import bg from "../assets/bg.jpg";
import Navbar from "../components/shared/Navbar";
const HomeLayouts = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="min-h-screen bg-cover bg-center" >
      <div className="max-w-7xl mx-auto pt-4">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default HomeLayouts;
