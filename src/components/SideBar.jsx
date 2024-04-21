import { Link } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export default function SideBar() {
  const { user} = useAuth();
  return (
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
      
    </div>
  );
}
