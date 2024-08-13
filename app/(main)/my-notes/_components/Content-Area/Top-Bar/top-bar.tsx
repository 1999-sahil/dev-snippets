'use client'

import React from 'react'
import UserProfile from './user-profile'
import SearchBar from './input-search'
import { ModeToggle } from '@/components/theme-toggle'
import SidebarMenuIcon from './sidebar-menu-icon'

function TopBar() {
  return (
    <div className='flex items-center justify-between rounded-lg bg-zinc-200/50 dark:bg-zinc-900 p-3 px-6'>
      <UserProfile />
      <SearchBar />
      <div className="flex items-center gap-4">
        <ModeToggle />
        <SidebarMenuIcon />
      </div>
    </div>
  )
}

export default TopBar