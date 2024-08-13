'use client'

import React from 'react'
import { ModeToggle } from '@/components/theme-toggle'
import UserProfile from './UserProfile'
import SearchBar from './SearchBar'
import TopbarMenuIcon from './TopbarMenuIcon'
function TopBar() {
  return (
    <div className='flex items-center justify-between rounded-lg bg-zinc-200/50 dark:bg-zinc-900 p-3 px-6'>
      <UserProfile />
      <SearchBar />
      <div className="flex items-center gap-4">
        <ModeToggle />
        <TopbarMenuIcon />
      </div>
    </div>
  )
}

export default TopBar