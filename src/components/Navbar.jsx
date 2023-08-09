import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-black bg-opacity-95">
      <Link to="/">
        <div className="flex gap-3 p-4">
          <img
            src="../cryptocurrency.png"
            alt=""
            className="w-10 h-15 hidden lg:block"
          />
          <div className="wrapper ">
            <div className="bg ">Cryptomania</div>
            <div className="fg">Cryptomania</div>
          </div>
        </div>
      </Link>
      <div className="menuContainer lg:hidden ">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
