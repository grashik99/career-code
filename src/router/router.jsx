import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProfile from "../components/MyProfile/MyProfile";
import Private from "../Private/Private";
import Settings from "../components/Settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "myProfile",
        element: (
          <Private>
            <MyProfile />
          </Private>
        ),
      },
      {
        path: "settings",
        element: (
          <Private>
            <Settings />
          </Private>
        ),
      },
    ],
  },
]);
