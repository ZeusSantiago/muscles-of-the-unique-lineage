import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContextProvider";

const UserProtectedRoutes = () => {
  const { auth, authResolved } = useAuthContext();

  if (!authResolved) {
    console.log("hackdog");
    return <div>LOADING...</div>;
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default UserProtectedRoutes;
