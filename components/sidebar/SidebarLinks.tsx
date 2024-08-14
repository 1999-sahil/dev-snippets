"use client";

import { useGlobalContext } from "@/contexts/ContextApi";
import React from "react";

function SidebarLinks() {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  const onMenuClick = (index: number) => {
    const updatedSideBarMenu = sideBarMenu.map((menu, i) => {
      if (i === index) {
        return { ...menu, isSelected: true };
      } else {
        return { ...menu, isSelected: false };
      }
    });
    setSideBarMenu(updatedSideBarMenu);
  };

  return (
    <div className="mx-2 flex flex-col justify-center">
      <ul className="relative space-y-2 px-1">
        {sideBarMenu.map((menu, index) => (
          <li
            key={index}
            onClick={() => onMenuClick(index)}
            className={`flex items-center cursor-pointer rounded-md select-none
              ${
                menu.isSelected
                  ? "bg-[#F28500] text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-zinc-300 dark:hover:bg-zinc-800"
              }
              ${!openSidebar ? "flex flex-col items-center justify-center p-[5px] gap-[2px]" : "p-2 gap-2"}
            `}
          >
            <span>
              {menu.icons}
            </span>
            {!openSidebar ? (
              <h2 className={`text-[10px] font-mukta font-semibold`}>
                {menu.name}
              </h2>
            ) : (
              <h2
              style={{
                transitionDelay: `${index + 3}00ms`,
              }}
              className={`whitespace-pre font-poppins text-sm duration-300 transition-all ${
                !openSidebar && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu.name}
            </h2>
            )}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarLinks;
