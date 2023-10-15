import { lazy } from "react";
import { Navigate } from "react-router-dom";

import Loadable from "components/common/Loadable";
import MinimalLayout from "layout/MinimalLayout";

const SignInPage = Loadable(lazy(() => import("views/auth/SignInPage")));
const SignUpPage = Loadable(lazy(() => import("views/auth/SignUpPage")));

const AuthRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/",
      element: <SignInPage />,
    },
    {
      path: "/signin",
      element: <Navigate replace to="/" />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: '*',
      element: <Navigate to="" />
    }
  ],
};

export default AuthRoutes;
