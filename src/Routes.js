// ProjectRoutes.js
import React, { useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext"; // Adjust import path

import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Store from "pages/Store";
import OrderDetails from "pages/OrderDetails";
import RedirectingPage from "pages/RedirectingPage";

const ProjectRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },

    {
      path: "signup",
      element: isAuthenticated ? (
        <RedirectingPage
          message="You are already logged in. Redirecting to store..."
          redirectTo="/store"
        />
      ) : (
        <Signup />
      ),
    },
    {
      path: "login",
      element: isAuthenticated ? (
        <RedirectingPage
          message="You are already logged in. Redirecting to store..."
          redirectTo="/store"
        />
      ) : (
        <Login />
      ),
    },
    {
      path: "store",
      element: isAuthenticated ? (
        <Store />
      ) : (
        <RedirectingPage
          message="You need to log in to access the store. Redirecting to login..."
          redirectTo="/login"
        />
      ),
    },
    {
      path: "orderdetails",
      element: isAuthenticated ? (
        <OrderDetails />
      ) : (
        <RedirectingPage
          message="You need to log in to access order details. Redirecting to login..."
          redirectTo="/login"
        />
      ),
    },
  ]);

  return element;
};

export default ProjectRoutes;
