'use client'

import { Search } from 'lucide-react'
import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

function SearchBar() {
  return (
    <div className='relative pl-3 max-md:pl-2 w-[60%] h-[38px] bg-white dark:bg-zinc-800 rounded-3xl flex items-center gap-2 max-md:gap-1'>
      <Search className='text-[#F28500]' />
      <input
        placeholder='Search your snippet ...'
        className='w-[60%] outline-none text-xs bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 font-poppins'
      />
      <AddSnippetButton />
    </div>
  )
}

function AddSnippetButton() {
  return (
    <div className="flex absolute gap-2 px-2 max-md:px-0 rounded-3xl max-md:rounded-full bg-[#F28500] p-1 max-md:p-0 text-[13px] font-poppins text-white top-[5px] right-[6px] items-center justify-center cursor-pointer select-none">
      <div className='hidden md:flex'>Snippet</div>
      <div className='max-md:text-lg max-md:p-1.5'>
        <FaAnglesRight className='text-base' />
      </div>
    </div>
  )
}

export default SearchBar