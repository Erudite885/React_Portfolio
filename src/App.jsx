import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <div>
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <Experience />
        <Works />
        <About />
        <Feedbacks />
        <div>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // children: [
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      //   {
      //     path: "/cryptocurrencies",
      //     element: <Cryptocurrencies />,
      //   },
      //   {
      //     path: "/exchanges",
      //     element: <Exchanges />,
      //   },
      //   {
      //     path: "/crypto/:id",
      //     element: <CryptoDetails />,
      //   },
      //   {
      //     path: "/news",
      //     element: <News />,
      //   },
      // ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
