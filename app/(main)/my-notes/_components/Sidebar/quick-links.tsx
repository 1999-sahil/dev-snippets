"use client";

import { useGlobalContext } from '@/contexts/ContextApi'
import React from 'react'

function QuickLinks() {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu }
  } = useGlobalContext();

  console.log(sideBarMenu);

  const clickedMenu = (index: number) => {
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
    <div className='my-10'>
        <div className="font-semibold font-ubuntu text-gray-400/70">
            Quick Links
        </div>
        <ul className="text-gray-400 mt-4 flex flex-col gap-2 font-poppins text-sm">
            {sideBarMenu.map((menu, index) => (
                <li
                    key={index}
                    onClick={() => clickedMenu(index)}
                    className={`flex items-center cursor-pointer rounded-md p-2 select-none gap-1 ${menu.isSelected ? "bg-[#F28500] text-white" : "text-gray-400 hover:bg-zinc-800"}`}
                >
                    {menu.icons}
                    <span>{menu.name}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default QuickLinks