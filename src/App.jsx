import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  Footer,
  Home,
  Menu,
  Navbar,
  News,
} from "./components/index";

import "./App.scss";

const App = () => {
  const Layout = () => {
    return (
      <div className="main font-sans bg-gray-300">
        <Navbar />
        <div className="container flex">
          <div className="menuContainer w-64">
            <Menu />
          </div>
          <div className="contentContainer px-1.5 py-5 w-full">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cryptocurrencies",
          element: <Cryptocurrencies />,
        },
        {
          path: "/exchanges",
          element: <Exchanges />,
        },
        {
          path: "/crypto/:id",
          element: <CryptoDetails />,
        },
        {
          path: "/news",
          element: <News />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
