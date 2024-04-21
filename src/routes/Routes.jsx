import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout></DashboardLayout>,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <PrivateRoute><Home></Home></PrivateRoute>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
      ],
    },
  ]);