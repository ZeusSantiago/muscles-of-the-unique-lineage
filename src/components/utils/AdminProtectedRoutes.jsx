import { Outlet, Navigate } from "react-router-dom";

const AdminProtectedRoutes = () => {
  const admin = null;
  return admin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminProtectedRoutes;
