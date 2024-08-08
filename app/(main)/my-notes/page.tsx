import Logo from '@/components/navigation/logo'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='text-white font-poppins text-xl'>page
        <Link href="/">
            <Logo />
        </Link>
        <UserButton />
    </div>
  )
}

export default page