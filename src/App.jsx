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

const App = () => {
  const Layout = () => {
    return (
      <div className="amain flex flex-col 2xl:max-w-[70%] lg:mx-auto">
        <Navbar />
        <div className="appcontainer bg-[#b9b9b9] flex">
          <div className="menuContainer hidden lg:block ">
            <Menu />
          </div>
          <div className="contentContainer p-2 m-4">
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
