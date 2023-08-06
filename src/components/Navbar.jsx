import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="bg-black text-white flex items-center px-3 py-8 gap-3">
        <img src="../cryptocurrency.png" alt="" className="w-10 h-15" />
        <h2 className="font-bold text-2xl uppercase">Cryptomania</h2>
      </div>
    </Link>
  );
};

export default Navbar;
