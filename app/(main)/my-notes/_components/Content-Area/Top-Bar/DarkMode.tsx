'use client';

import React from 'react';
import { useGlobalContext } from '@/contexts/ContextApi';

function DarkMode() {
    const {
        darkModeObject: { darkMode, setDarkMode },
    } = useGlobalContext();

    const handleClickDarkMode = (index: number) => {
        const updateDarkModeObject = darkMode.map((item, i) => {
            if (i === index) {
                return { ...item, isSelected: true };
            } else {
                return { ...item, isSelected: false };
            }
        });
        setDarkMode(updateDarkModeObject);
    };

    return (
        <div className='bg-slate-100 h-[36px] w-[74px] rounded-3xl flex items-center gap-2 pl-[5px]'>
            {darkMode.map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => handleClickDarkMode(index)}
                        className={`${item.isSelected ? "bg-[#F28500] text-white" : "bg-slate-100 text-[#F28500]"}
                            w-7 h-7 flex items-center justify-center rounded-full p-1 left-1 cursor-pointer select-none
                        `}
                    >
                        {item.icon}
                    </div>
                )
            })}
        </div>
    )
}

export default DarkMode