import { Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      {/* Sidebar */}
      {user && <SideBar></SideBar>}

      <div className="flex-1">
        {user && <NavBar></NavBar>}

        {/* Main Content */}
        <div className="mt-12 ml-64 p-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
