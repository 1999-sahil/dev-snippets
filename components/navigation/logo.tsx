'use client'

import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center text-white">
      <h2 className="text-xl font-poppins">
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">dev</span>
        <span className="text-gray-700 dark:text-zinc-300">snippets</span>
        <span className="text-orange-500 mx-[2px]">.</span>
      </h2>
      <Image
        src="/logo.png" 
        alt="devsnippets-logo" 
        width={25} 
        height={25} 
        className="" 
      />
    </div>
  );
}

export default Logo;
