import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Register from "./component/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <p>Error 404</p>,
  },
]);

export default router;