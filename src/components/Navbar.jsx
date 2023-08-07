import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="bg-black text-white flex items-center px-3 py-4 sm:py-8 gap-3">
        <img
          src="../cryptocurrency.png"
          alt=""
          className="hidden sm:block w-10 h-15"
        />
        <div className="wrapper ">
          <div className="bg ">Cryptomania</div>
          <div className="fg">Cryptomania</div>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;
