import React from 'react'
import Logo from './sidebar-logo'
import QuickLinks from './quick-links'
import Languages from './languages'

function Sidebar() {
  return (
    <div className='w-[20%] p-5 pt-8 flex flex-col gap-2 h-screen border-r border-gray-600'>
        <Logo />
        <QuickLinks />
        <Languages />
    </div>
  )
}

export default Sidebar