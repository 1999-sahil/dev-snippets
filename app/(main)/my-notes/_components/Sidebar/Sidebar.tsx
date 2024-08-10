import React from 'react'
import Logo from './sidebar-logo'
import QuickLinks from './quick-links'
import Languages from './languages'

function Sidebar() {
  return (
    <div className='w-full m-2 rounded-md pr-10 pl-5 pt-5 flex flex-col gap-2 h-screen bg-zinc-900'>
        <Logo />
        <QuickLinks />
        <Languages />
    </div>
  )
}

export default Sidebar