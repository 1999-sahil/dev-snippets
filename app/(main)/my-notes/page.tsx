import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Sidebar from './_components/Sidebar/Sidebar'
import ContentArea from './_components/Content-Area/content-area'

function page() {
  return (
    <div className='flex w-full'>
      <div className='w-[20%]'>
        <Sidebar />
      </div>
      <div className='flex-1 px-5'>
        <ContentArea />
      </div>
    </div>
  )
}

export default page