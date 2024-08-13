'use client'

import React from 'react'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

function Languages() {
  return (
    <div className='mb-10'>
        <div className="font-semibold font-mukta text-gray-400/70">
            Language
        </div>
        <div className="mt-5 ml-2 text-gray-400 text-sm font-poppins flex flex-col gap-4">
            <div className="flex items-center">
                <div className="flex items-center w-full justify-between">
                    <span className='flex items-center gap-1'>
                        <BiLogoJavascript className='w-6 h-6' />
                        Javascript
                    </span>
                    <span className='font-bold text-[#F28500]'>3</span>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex items-center w-full justify-between">
                    <span className='flex items-center gap-1'>
                        <FaPython className='w-6 h-6' />
                        Python
                    </span>
                    <span className='font-bold text-[#F28500]'>3</span>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex items-center w-full justify-between">
                    <span className='flex items-center gap-1'>
                        <SiTypescript className='w-6 h-6' />
                        Typescript
                    </span>
                    <span className='font-bold text-[#F28500]'>3</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Languages