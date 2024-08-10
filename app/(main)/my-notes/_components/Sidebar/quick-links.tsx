import { BorderAll, DeleteOutlineOutlined, FavoriteBorder } from '@mui/icons-material'
import React from 'react'

function QuickLinks() {
  return (
    <div className='my-10'>
        <div className="font-semibold font-ubuntu text-gray-400/70">
            Quick Links
        </div>
        <ul className="text-gray-400 mt-4 flex flex-col gap-2 font-poppins text-sm">
            <li className="flex items-center gap-1 bg-[#F28500] text-white p-[7px] px-2 rounded-md w-full cursor-pointer">
                <BorderAll sx={{ fontSize: 18 }} />
                <span>All Snippets</span>
            </li>
            <li className="flex items-center gap-1 hover:bg-[#F28500] hover:text-white p-[7px] px-2 rounded-md w-full cursor-pointer">
                <FavoriteBorder sx={{ fontSize: 18 }} />
                <span>Favorites</span>
            </li>
            <li className="flex items-center gap-1 hover:bg-[#F28500] hover:text-white p-[7px] px-2 rounded-md w-full cursor-pointer">
                <DeleteOutlineOutlined sx={{ fontSize: 18 }} />
                <span>Trash</span>
            </li>
        </ul>
    </div>
  )
}

export default QuickLinks