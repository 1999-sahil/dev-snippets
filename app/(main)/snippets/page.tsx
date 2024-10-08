'use client'

import ContentArea from '@/components/content-area/ContentArea'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

function page() {
  return (
    <div className="flex w-full dark:bg-[#121213] bg-white">
      <Sidebar />
      <div className='max-w-full p-4'>
        <ContentArea />
      </div>
    </div>
  )
}

export default page
