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

  return (
    <div className={`${openSidebar ? "fixed z-50 shadow-lg" : "max-md:hidden"} w-full m-2 rounded-md pr-10 pl-5 pt-5 flex flex-col gap-2 h-screen dark:bg-zinc-900 bg-zinc-200/50`}>
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  )
}

export default Sidebar