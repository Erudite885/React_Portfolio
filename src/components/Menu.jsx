import React from 'react'
import { Link } from "react-router-dom";
import { menu } from "../data";
const Menu = () => {
  return (
    <div className="menu bg-black bg-opacity-95 text-white">
      {menu.map((item) => (
        <div className="item flex flex-col" key={item.id}>
          <span className="title hidden md:block text-xs font-extralight uppercase">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem hover:bg-gradient-to-r hover:from-yellow-600 flex items-center gap-2.5 p-2.5 rounded-md" key={listItem.id}>
              <img src={listItem.icon} alt="listitem icon" />
              <span className="hidden md:block listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu