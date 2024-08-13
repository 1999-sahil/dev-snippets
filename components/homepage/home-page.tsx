'use client'

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Description from './app-description'

function HomePage() {
  return (
    <div className='flex items-center justify-center mt-8 px-10'>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <h1 className='text-white font-poppins text-4xl md:text-5xl text-center font-semibold leading-[48px] md:leading-[62px]'>
                <span className="bg-gradient-to-r from-[#F28500] to-[#FFBF00] inline-block text-transparent bg-clip-text mr-2">Organise</span>
                Your Code Snippets
                <span className='border-l-4 border-orange-500 px-2 py-1 bg-gradient-to-r from-[#bf6a02a8] to-[#2e22014e] ml-2'>Efficiently!</span>
            </h1>
            <div className='flex items-center justify-center mx-0 lg:mx-60 md:px-10'>
                <span className='text-center text-gray-100 font-poppins text-base md:text-lg leading-[30px]'>
                    With our advanced tagging and search features,
                    you can quickly find the snippet you need, right
                    when you need it. Spend less time searching for 
                    code and more time writing it.
                </span>
            </div>
            <div className='flex items-center justify-center text-center px-10 text-white font-poppins font-medium underline underline-offset-2'>
                Our mission is to change the way development teams code.
            </div>
            <button className='flex items-center justify-center gap-2 bg-gradient-to-r from-[#F28500] via-orange-500 to-[#FFBF00] w-full lg:w-fit text-white font-mukta font-bold text-lg py-3 lg:px-10 rounded-lg'>
                Get started
                <FaArrowRight />
            </button>
        </div>
    </div>
  )
}

export default HomePage