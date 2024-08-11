'use client'

import React from 'react'
import Logo from './sidebar-logo'
import QuickLinks from './quick-links'
import Languages from './languages'
import { useGlobalContext } from '@/contexts/ContextApi'

function Sidebar() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();
  console.log("opensidebar", openSidebar);

  return (
    <div className={`${openSidebar ? "max-md:fixed z-[9999] shadow-lg" : "max-md:hidden"} rounded-md pr-10 pl-5 pt-5 flex flex-col gap-2 h-screen dark:bg-zinc-900 bg-zinc-200`}>
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  )
}

export default Sidebar