import { Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {user && <SideBar></SideBar>}

      <div className="flex-1">
        {user && <NavBar></NavBar>}

        {/* Main Content */}
        <div className=" p-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
