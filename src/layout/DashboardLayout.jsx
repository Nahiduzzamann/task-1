import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const DashboardLayout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm mt-1">Welcome, {user?.username}</p>
        </div>
        <nav className="flex-1 mt-4">
          <ul>
            <li>
              <Link
                to="/product"
                className="block py-2 px-4 text-sm hover:bg-gray-700"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 px-4 text-sm hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            {user?.username === "admin" && (
              <li>
                <Link
                  to="/users"
                  className="block py-2 px-4 text-sm hover:bg-gray-700"
                >
                  Users List
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="block w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
