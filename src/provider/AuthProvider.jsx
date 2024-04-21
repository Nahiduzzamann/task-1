import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username, password) => {
    //let's assume username and password
    const users = {
      user: { username: "user", password: "1111" },
      admin: { username: "admin", password: "2222" },
    };

    const authUser = users[username];

    if (authUser && authUser.password === password) {
      setUser(authUser);
      localStorage.setItem("user", JSON.stringify(authUser));
      return true;
    } else {
      setUser(null);
      localStorage.removeItem("user");
      return false;
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const authInfo = {
    user,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
