import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyProfile from "../components/MyProfile/MyProfile";
import Private from "../Private/Private";
import Settings from "../components/Settings/Settings";
import Error from "../components/Error/Error";
import AllJobs from "../components/AllJobs/AllJobs";
import { Suspense } from "react";
import JobDetails from "../components/JobDetails/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    errorElement: <Error />,
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
      {
        path: "jobs",
        element: <AllJobs />,
        loader: () => fetch("http://localhost:3000/jobs"),
        hydrateFallbackElement: <div>Loading....</div>,
      },
      {
        path: "jobDetails/:id",
        element: <Private>
          <JobDetails />
        </Private>,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
        hydrateFallbackElement: <div>Loading....</div>,
      },
    ],
  },
]);
