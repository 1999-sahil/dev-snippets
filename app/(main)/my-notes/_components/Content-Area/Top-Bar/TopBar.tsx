import React from 'react'
import UserProfile from './UserProfile'
import SearchBar from './SearchBar'
import { ModeToggle } from '@/components/theme-toggle'
import SidebarMenuIcon from './SidebarMenuIcon'

function TopBar() {
  return (
    <div className='flex items-center justify-between rounded-lg bg-zinc-200/50 dark:bg-zinc-900 p-3'>
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