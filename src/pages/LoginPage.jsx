import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const LoginPage = () => {
  const navigate = useNavigate();
  // state for after login where to redirect 
  const from = location.state?.from?.pathname || "/";

  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // handle login functionality 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const success = await login(username, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  // show password and hide password functionality
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200 px-3">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-slate-300 p-4 rounded-xl shadow-lg"
      >
        <h1 className="text-center text-lg md:text-2xl font-medium">Log In</h1>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-2"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
            <span
              onClick={() => setError("")}
              className="absolute top-0 bottom-0 right-0 px-4 py-3 font-medium cursor-pointer"
            >
              <AiOutlineClose className="text-[20px] cursor-pointer hover:scale-110 duration-300 " />
            </span>
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            placeholder="Type username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              placeholder="Type password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} {/*show password and hide password icon*/}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white shadow-md md:font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
