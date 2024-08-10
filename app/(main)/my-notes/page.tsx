import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Sidebar from './_components/Sidebar/Sidebar'

function page() {
  return (
    <div>
      <Sidebar />
      <UserButton />
    </div>
  )
}

export default page