'use client'

import { useGlobalContext } from '@/contexts/ContextApi'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

function TopbarMenuIcon() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  return (
    <>
      {!openSidebar ? (
        <FiMenu
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-gray-800 dark:text-gray-200 w-6 h-6 cursor-pointer md:hidden block"
        />
      ) : (
        <IoClose
          onClick={() => setOpenSidebar(!openSidebar)}
          className="text-gray-800 dark:text-gray-200 w-6 h-6 cursor-pointer md:hidden block"
        />
      )}
    </>
  )
}

export default TopbarMenuIcon