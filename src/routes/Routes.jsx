import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import ProductPage from "../pages/ProductPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout></DashboardLayout>,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <PrivateRoute><ProductPage></ProductPage></PrivateRoute>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
      ],
    },
  ]);