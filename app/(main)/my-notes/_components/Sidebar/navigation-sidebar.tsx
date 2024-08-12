'use client'

import React from 'react'
import SidebarLogo from './navigation-logo'
import NavigationLinks from './navigation-item'
import { Menu } from 'lucide-react'
import { useGlobalContext } from '@/contexts/ContextApi';
import UserProfile from './user-profile'
import { ModeToggle } from '@/components/theme-toggle'

function SidebarNavigation() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  return (
    <div className={`min-h-screen bg-zinc-200/50 dark:bg-zinc-800 transition-all duration-500
        ${openSidebar ? 'w-72' : 'w-16'} flex flex-col gap-4
      `}
    >
        {/** LOGO AND Icon */}
        <div className={`py-4 px-4 border-b flex items-center justify-between ${!openSidebar && 'mx-auto'}`}>
            <SidebarLogo />
            <Menu 
              onClick={() => setOpenSidebar(!openSidebar)}
              className='text-zinc-700 dark:text-zinc-200 bg-zinc-600 bg-opacity-20 rounded-md p-1 w-8 h-8 cursor-pointer hover:bg-opacity-25'
            />
        </div>

        {/** links */}
        <div className='flex-1 py-4'>
          <NavigationLinks />
        </div>

        {/** user profile and theme-mode */}
        <div className='border-t pt-4 flex items-center gap-4'>
          <UserProfile />
          <ModeToggle />
        </div>
    </div>
  )
}

export default SidebarNavigation