import { Link } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { AiOutlineClose } from "react-icons/ai";

export default function SideBar({ showSideNav, handleShowSideNav }) {
  const { user } = useAuth();
  return (
    <div
      className={`bg-gray-800 text-white ${
        showSideNav ? " w-48" : "w-0"
      } overflow-hidden md:w-48 lg:w-64 flex flex-col fixed h-screen z-10 transition-width duration-300 `}
    >
      <div className="p-2 lg:p-4 border-b flex justify-between items-center">
        <div className="">
          <h1 className="text-xl lg:text-2xl font-bold">Dashboard</h1>
          <p className="text-sm mt-1">Welcome, {user?.username}</p>
        </div>
        <AiOutlineClose
          onClick={handleShowSideNav}
          className="text-[20px] cursor-pointer hover:scale-110 duration-300 border rounded block md:hidden"
        />
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
