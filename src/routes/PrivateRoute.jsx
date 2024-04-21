import { Navigate, useLocation } from "react-router";
import { useAuth } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
// if user exist then show PrivateRoute's children as page 
  if (user) {
    return children;
  }
  // if user not exist then go login page 
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
