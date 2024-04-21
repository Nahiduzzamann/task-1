import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "../provider/AuthProvider";

export default function NavBar({  handleShowSideNav }) {
  const { logout } = useAuth();
  return (
    <div className="bg-gray-800 h-12 px-4 flex justify-between items-center fixed w-screen z-10">
      <div>
        <AiOutlineMenu onClick={handleShowSideNav} className="text-[20px] text-white cursor-pointer hover:scale-110 duration-300 border rounded  block md:hidden" />
      </div>
      <button
        onClick={logout}
        className="  py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
