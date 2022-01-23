import React from "react";
import {EditIcon} from "../icons/Icon";

const UserBox = () => {
  return (
    <div className="flex xl:justify-between justify-center items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 xl:px-4 transform transition-colors duration-200">
      <img
        src="https://avatars.githubusercontent.com/u/75859682?v=4"
        alt="Profile"
        className="xl:w-11 xl:h-11 w-9/12 h-auto rounded-full"
      />
      <div className="hidden flex-col xl:flex">
        <span className="font-bold text-md text-black">abdulkadir polat</span>
        <span className="text-sm text-gray-dark">@abdulkadrplt</span>
      </div>

      <EditIcon className="w-6 h-6 text-black hidden xl:block" />
    </div>
  );
};

export default UserBox;