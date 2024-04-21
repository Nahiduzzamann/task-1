import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import ProductPage from "../pages/ProductPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import UserList from "../pages/UserList";
import ProductDetails from "../pages/ProductDetails";
// all routes 
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
          path: "/product",
          element: <PrivateRoute><ProductPage></ProductPage></PrivateRoute>,
        },
        {
          path: "/product/product-details",
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>,
        },
        {
          path: "/user-list",
          element: <PrivateRoute><UserList></UserList></PrivateRoute>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
      ],
    },
  ]);