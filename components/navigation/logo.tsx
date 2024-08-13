'use client'

import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center text-white">
      <h2 className="text-2xl md:text-xl font-poppins">
        <span className="font-semibold">dev</span>
        <span className="text-gray-300">snippets</span>
        <span className="text-orange-500 mx-[2px]">.</span>
      </h2>
      <Image src="/logo.png" alt="devsnippets-logo" width={25} height={25} className="max-md:w-[30px] amx-md:h-[30px]" />
    </div>
  );
}

export default Logo;
