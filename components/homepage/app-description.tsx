import Image from 'next/image'
import React from 'react'
import { IoTime } from 'react-icons/io5'
import { LuClipboardEdit } from 'react-icons/lu'

function Description() {
  return (
    <div className='px-10 py-10 my-10 space-y-8'>
        <div className='flex flex-col items-center justify-center gap-8 p-10'>
            <h2 className='text-white font-poppins text-4xl md:text-5xl text-start font-semibold leading-[48px] md:leading-[62px]'>
                Code
                <span className="bg-gradient-to-r from-[#F28500] to-[#FFBF00] inline-block text-transparent bg-clip-text mx-2">smarter</span>
                than ever.
            </h2>
            <p className='text-base md:text-lg font-poppins text-gray-100'>
                Leverage the power of codebase fetaures,
                helping you write clean, performance optimized code.
            </p>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2 md:gap-3'>
                    <LuClipboardEdit className='text-[#F28500] text-3xl' />
                    <p className='text-base md:text-lg font-poppins text-gray-100'>
                        Create documentation, refactor, debug and generate code with full codebase context.
                    </p>
                </div>
                <div className='flex gap-2 md:gap-3'>
                    <IoTime className='text-[#F28500] text-3xl' />
                    <p className='text-base md:text-lg font-poppins text-gray-100'>
                        Spend more time creating code, and less time debugging errors.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <Image src="/vercel.svg" alt="project-image" width={400} height={400} />
        </div>
    </div>
  )
}

export default Description