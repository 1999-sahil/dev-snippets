'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import Logo from '@/components/navigation/logo'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from "react-icons/io5"
import MobileNavigation from './mobile-navigation'
import { useAuth } from '@clerk/nextjs'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#121213] py-2 px-4 md:px-0">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-base font-mukta">
                <li>
                  <a className="text-gray-300 font-medium transition hover:text-gray-400" href="#"> Home </a>
                </li>

                <li>
                  <a className="text-gray-300 font-medium transition hover:text-gray-400" href="#"> Developers </a>
                </li>

                <li>
                  <a className="text-gray-300 font-medium transition hover:text-gray-400" href="#"> Students </a>
                </li>

                <li>
                  <a className="text-gray-300 font-medium transition hover:text-gray-400" href="#"> VSCode </a>
                </li>

                <li>
                  <a className="text-gray-300 font-medium transition hover:text-gray-400" href="#"> Pricing </a>
                </li>

                <li>
                  <a className="text-gray-300 font-medium transition hover:text-gray-400" href="#"> Blog </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              {userId ? (
                <Link href="/my-notes">
                  <button className='font-mukta font-medium bg-gradient-to-r from-[#F28500] to-[#FFBF00] text-white px-5 py-1.5 rounded-md'>
                    Dashboard
                  </button>
                </Link>
              ) : (
                <div className="flex items-center gap-4">
                  <Link href="/sign-in">
                    <button className='underline underline-offset-2 font-medium font-mukta text-[#F28500]'>
                      Login
                    </button>
                  </Link>

                  <Link href="/sign-up">
                    <button className='font-mukta font-medium bg-gradient-to-r from-[#F28500] to-[#FFBF00] text-white px-5 py-1.5 rounded-md'>
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="block md:hidden">
                <button className="text-gray-100" onClick={toggleDropdown}>
                  {!isOpen ? (
                    <FiMenu className='text-3xl text-gray-100 hover:text-white' />
                  ) : (
                    <IoClose className='text-3xl text-gray-100 hover:text-white' />
                  )}
                </button>
              </div>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-full h-full rounded-md shadow-lg z-10">
                  <MobileNavigation />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar