import { useAuth } from "../provider/AuthProvider";

export default function NavBar() {
  const { logout } = useAuth();
  return (
    <div className="bg-gray-800 h-12 p-2 flex justify-end items-center fixed w-screen">
     
        <button
          onClick={logout}
          className="  py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
    
    </div>
  );
}
