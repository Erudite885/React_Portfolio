import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex items-center justify-between bg-black text-white p-8 ">
      <span className="text-sm">Copyright © 2023</span>
      <span className="">
        <Link className="font-bold text-xl" to="/">
          Cryptomania Inc.
        </Link>
      </span>
      <span className="text-sm"> All Rights Reserved.</span>
    </div>
  );
};

export default Footer;
