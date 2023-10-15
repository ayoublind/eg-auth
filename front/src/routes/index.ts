import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

// routes
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

export default function Routes() {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const currentRoutes = isLoggedIn ? MainRoutes : AuthRoutes;

  return useRoutes([currentRoutes]);
}
