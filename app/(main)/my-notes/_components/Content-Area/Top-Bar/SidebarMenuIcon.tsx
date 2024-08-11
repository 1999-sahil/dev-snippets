'use client'

import { useGlobalContext } from '@/contexts/ContextApi'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

function SidebarMenuIcon() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  return (
    <>
      {!openSidebar ? (
        <FiMenu
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-zinc-600 cursor-pointer md:hidden block"
        />
      ) : (
        <IoClose
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-zinc-600 cursor-pointer md:hidden block"
        />
      )}
    </>
  )
}

export default SidebarMenuIcon