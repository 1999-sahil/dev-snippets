import React from 'react'
import UserProfile from './UserProfile'
import SearchBar from './SearchBar'

function TopBar() {
  return (
    <div className='flex items-center justify-between rounded-lg bg-zinc-900 p-3'>
      <UserProfile />
      <SearchBar />
    </div>
  )
}

export default TopBar