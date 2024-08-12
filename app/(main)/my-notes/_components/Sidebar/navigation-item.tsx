"use client";

import { useGlobalContext } from "@/contexts/ContextApi";
import React from "react";

function NavigationLinks() {

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
      {openSidebar ? (
        <h2 className="text-sm font-rubik font-semibold mb-4 ml-1 text-zinc-600 dark:text-zinc-200">Quick Links</h2>
      ) : (
        <h2 className="text-xs font-rubik font-semibold mb-3 ml-1 text-zinc-600 dark:text-zinc-200">Links</h2>
      )}
      <ul className="relative space-y-2">
        {sideBarMenu.map((menu, index) => (
          <li
            key={index}
            onClick={() => onMenuClick(index)}
            className={`flex items-center cursor-pointer rounded-md p-2 select-none gap-2
              ${menu.isSelected
                ? "bg-[#F28500] text-white"
                : "text-gray-600 dark:text-gray-400 hover:bg-zinc-300 dark:hover:bg-zinc-800"
              }
            `}
          >
            <span className='ml-1'>{menu.icons}</span>
            <h2
              style={{
                transitionDelay: `${index + 3}00ms`
              }}
              className={`whitespace-pre font-poppins text-sm duration-500 transition-all ${!openSidebar && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationLinks;
