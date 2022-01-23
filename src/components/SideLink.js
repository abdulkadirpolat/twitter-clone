import React from "react";

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name;
  return (
    <li className="group" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="cursor-pointer block text-xl mb-2 pointer-events-none"
      >
        <div className="inline-block">
          <div className="flex items-center group-hover:bg-gray-100 rounded-full pl-3 pr-8 py-3">
            <Icon />
            <span className={`ml-4 hidden xl:block ${isActive ? "font-bold" : ""}`}>{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;