import React from "react";
import { Link } from "react-router-dom";
import { menu } from "../data";
const Menu = () => {
  // console.log(menu.map((item) => item));
  return (
    <div className="mcontainer flex items-center lg:items-start lg:justify-start justify-center text-white relative py-4 lg:py-0 lg:h-full ">
      <div className="menu lg:py-4 flex bg-black items-center gap-4 overflow-scroll lg:items-start lg:justify-start lg:flex-col lg:h-full ">
        {menu.map((item) => (
          <div
            className="item w-full hover:bg-gradient-to-r hover:from-gray-700 lg:hover:from-yellow-700 "
            key={item.id}
          >
            <Link
              to={item.url}
              className="listItem flex gap-3 p-3 rounded-md"
              key={item.id}
            >
              <img src={item.icon} alt={`${item.title} icon`} />
              <span className="listItemTitle hidden md:block ">
                {item.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
