import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CryptoDetails, Cryptocurrencies, Exchanges, Footer, Home, Menu, Navbar, News } from "./components/index";

import "./App.scss";

const App = () => {
  // const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            {/* <QueryClientProvider client={queryClient}> */}
              <Outlet />
            {/* </QueryClientProvider> */}
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
          path: "exchanges",
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
