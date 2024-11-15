import { Outlet, Navigate } from "react-router-dom";

const UserProtectedRoutes = () => {
  const user = null;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtectedRoutes;
