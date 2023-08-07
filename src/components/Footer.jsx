import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex flex-col gap-2 sm:gap-0 md:flex-row items-center justify-between bg-black bg-opacity-95 text-white p-8 ">
      <span className="text-sm">Copyright © 2023</span>
      <span className="flex items-center justify-center gap-2">
        <img src="../cryptocurrency.png" alt="" className="sm:hidden w-7 h-7" />
        <Link className="font-bold text-xl cursor-pointer" to="/">
          Cryptomania Inc.
        </Link>
      </span>
      <span className="text-sm"> All Rights Reserved.</span>
    </div>
  );
};

export default Footer;
