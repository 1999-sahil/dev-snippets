import Logo from '@/components/navigation/logo'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='text-white font-poppins text-xl'>page
        <Link href="/">
            <Logo />
        </Link>
    </div>
  )
}

export default page