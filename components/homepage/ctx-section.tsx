'use client'

import React from 'react'
import { FaHeart, FaLongArrowAltRight } from 'react-icons/fa'

function CtxSection() {
  return (
    <div className='bg-[#bbbbbb] dark:bg-[#343434] rounded-l-full rounded-r-full px-6 py-2 flex items-center justify-center w-fit'>
      <div className='text-zinc-900 dark:text-white font-mukta font-medium text-sm flex items-center gap-2'>
        @2024 - Dev teams
        <FaHeart className='text-orange-600 dark:text-[#F28500]' />
        Dev Snippets
        <FaLongArrowAltRight className='dark:text-[#F28500] text-orange-600' />
      </div>
    </div>
  )
}

export default CtxSection