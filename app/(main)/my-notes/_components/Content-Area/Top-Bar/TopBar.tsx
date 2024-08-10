import React from 'react'
import UserProfile from './UserProfile'
import SearchBar from './SearchBar'
import DarkMode from './DarkMode'

function TopBar() {
  return (
    <div className='flex items-center justify-between rounded-lg bg-zinc-900 p-3'>
      <UserProfile />
      <SearchBar />
      <DarkMode />
    </div>
  )
}

export default TopBar