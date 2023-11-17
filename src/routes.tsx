import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "games/:id", element: <GameDetailsPage></GameDetailsPage> },
    ],
  },
]);

export default router;
