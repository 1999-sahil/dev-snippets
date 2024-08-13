'use client'

import React from 'react'
import SidebarLogo from './navigation-logo'
import NavigationLinks from './navigation-item'
import { Menu } from 'lucide-react'
import { useGlobalContext } from '@/contexts/ContextApi';
import UserProfile from './user-profile'

function SidebarNavigation() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  return (
    <div className={`min-h-screen bg-zinc-200/50 max-md:bg-zinc-200 dark:bg-zinc-900 transition-all duration-500
        ${openSidebar ? 'w-72 max-md:fixed max-md:z-50' : 'w-16 max-md:hidden'} flex flex-col gap-4
      `}
    >
        {/** LOGO AND Icon */}
        <div className={`py-4 px-4 border-b dark:border-zinc-600 flex items-center justify-between ${!openSidebar && 'mx-auto'}`}>
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
        <div className='border-t dark:border-zinc-600 pt-4'>
          <UserProfile />
        </div>
    </div>
  )
}

export default SidebarNavigation