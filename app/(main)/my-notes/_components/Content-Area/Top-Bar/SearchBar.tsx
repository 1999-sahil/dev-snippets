import { Search } from '@mui/icons-material'
import React from 'react'

function SearchBar() {
  return (
    <div className='relative pl-3 w-[60%] h-[38px] bg-gray-200 rounded-3xl flex items-center gap-2'>
      <Search className='text-[#F28500]' sx={{ fontSize: 20 }} />
      <input
        placeholder='Search your snippet here...'
        className='w-[70%] outline-none text-sm bg-gray-200 text-gray-500 font-poppins'
      />
      <AddSnippetButton />
    </div>
  )
}

function AddSnippetButton() {
  return (
    <div className="flex absolute gap-1 px-4 rounded-3xl bg-[#F28500] p-1 text-[13px] font-poppins text-white top-[5px] right-[6px] items-center cursor-pointer select-none">
      <div className='font-bold'>#</div>
      <div>Snippet</div>
    </div>
  )
}

export default SearchBar