import { Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { useState } from "react";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [showSideNav, setShowSideNav] = useState(false);
  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <div>
      {user ? (
        <div className="flex">
          {/* Sidebar */}
          <SideBar
            showSideNav={showSideNav}
            handleShowSideNav={handleShowSideNav}
          ></SideBar>
          <NavBar
            handleShowSideNav={handleShowSideNav}
          ></NavBar>
          {/* Main Content */}
          <div className="mt-12 md:ml-48 lg:ml-64 p-4">
            <Outlet></Outlet>
          </div>
        </div>
      ) : (
        <div>
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
