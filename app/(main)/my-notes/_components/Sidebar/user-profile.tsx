'use client'

import { useGlobalContext } from '@/contexts/ContextApi';
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

function UserProfile() {
  const { user } = useUser();

  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  const loadingImage = (
    <div className="w-9 h-9 rounded-full mb-[5px] bg-gray-200"></div>
  );
  
  return (
    <div className='flex items-center gap-3 pb-4 px-4'>
        <div className='relative'>
          {!user ? (
                loadingImage
            ) : (
                <UserButton />
            )}
        </div>
        <div className={`whitespace-pre duration-500 transition-all leading-3 ${!openSidebar && 'opacity-0 translate-x-28 overflow-hidden'}`}>
          <h2 className='font-semibold text-zinc-800 dark:text-zinc-200 font-poppins text-sm'>
            {user?.firstName} {user?.lastName}
          </h2>
          <span className='font-semibold text-gray-700 dark:text-gray-200 font-mukta text-xs'>
            {user?.emailAddresses[0].emailAddress}
          </span>
        </div>
    </div>
  )
}

export default UserProfile