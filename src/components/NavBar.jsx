import { useAuth } from "../provider/AuthProvider";

export default function NavBar() {
  const { logout } = useAuth();
  return (
    <div className="bg-gray-800 text-white p-2 flex justify-end">
     
        <button
          onClick={logout}
          className="block  py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
    
    </div>
  );
}
