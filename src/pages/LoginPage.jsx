import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849c.451-.451.451-1.181 0-1.632l-1.061-1.06c-.451-.451-1.181-.451-1.632 0l-1.061 1.06c-.451.451-.451 1.181 0 1.632l-1.061 1.061c-.451.451-.451 1.181 0 1.632.451.451 1.181.451 1.632 0l1.061-1.061c.451-.451.451-1.181 0-1.632l1.061-1.061c.451-.451.451-1.181 0-1.632-.451-.451-1.181-.451-1.632 0l-1.061 1.061c-.451.451-.451 1.181 0 1.632l-1.061 1.061c-.451.451-.451 1.181 0 1.632.451.451 1.181.451 1.632 0l1.061-1.061c.451-.451.451-1.181 0-1.632l1.061-1.061c.451-.451.451-1.181 0-1.632-.451-.451-1.18-.451-1.631 0l-1.06 1.061c-.452.451-.452 1.181 0 1.632l1.06 1.061c.451.451 1.18.451 1.631 0z" />
              </svg>
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
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
