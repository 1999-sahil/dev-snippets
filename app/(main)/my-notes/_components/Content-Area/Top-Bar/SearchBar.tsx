import { Search } from '@mui/icons-material'
import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

function SearchBar() {
  return (
    <div className='relative pl-3 w-[60%] h-[38px] bg-white dark:bg-zinc-800 rounded-3xl flex items-center gap-2'>
      <Search className='text-[#F28500]' sx={{ fontSize: 20 }} />
      <input
        placeholder='Search your snippet here...'
        className='w-[70%] outline-none text-sm bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-300 font-poppins'
      />
      <AddSnippetButton />
    </div>
  )
}

function AddSnippetButton() {
  return (
    <div className="flex absolute gap-2 px-2 rounded-3xl bg-[#F28500] p-1 text-[13px] font-poppins text-white top-[5px] max-md:top-[4px] right-[6px] items-center cursor-pointer select-none">
      <div className='hidden md:flex'>Snippet</div>
      <div className='max-md:text-lg max-md:p-[2px]'>
        <FaAnglesRight />
      </div>
    </div>
  )
}

export default SearchBar