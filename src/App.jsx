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
  StarsCanvas
} from "./components";

const App = () => {
  const Layout = () => {
    return (
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-contain bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <About />
        <Experience />
        <Tech />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
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
