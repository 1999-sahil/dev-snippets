
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Sidebar from './_components/Sidebar/Sidebar'
import ContentArea from './_components/Content-Area/content-area'

function page() {
  return (
    <div className={`flex w-full dark:bg-[#121213] bg-white`}>
      <div className=''>
        <Sidebar />
      </div>
      <div className='md:flex-1 w-full md:px-5'>
        <ContentArea />
      </div>
    </div>
  )
}

export default page
//hidden md:flex