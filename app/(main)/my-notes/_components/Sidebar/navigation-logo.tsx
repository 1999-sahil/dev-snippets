'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '@/contexts/ContextApi';

function SidebarLogo() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  return (
    <Link 
      href="/" 
      className={`flex items-center justify-center dark:text-white text-zinc-900 cursor-pointer
        ${openSidebar ? "block" : "hidden"}
      `}
    >
      <h2 className="text-2xl md:text-xl font-poppins">
        <span className="font-semibold">dev</span>
        <span className={`dark:text-gray-300 text-gray-500`}>snippets</span>
        <span className="text-orange-500 mx-[2px]">.</span>
      </h2>
      <Image src="/logo.png" alt="devsnippets-logo" width={25} height={25} className="max-md:w-[30px] amx-md:h-[30px]" />
    </Link>
  )
}

export default SidebarLogo