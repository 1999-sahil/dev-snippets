'use client'

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function MobileNavigation() {
  const { userId } = useAuth();

  return (
    <div className="relative">
      <div
        className="absolute end-0 z-10 w-72 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
        role="menu"
      >
        <div className="p-2">
          <strong className="block p-2 text-xs font-medium font-poppins uppercase text-gray-400">
            {" "}
            General{" "}
          </strong>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-base font-mukta font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Home
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-base font-mukta font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Developers
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-base font-mukta font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Students
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-base font-mukta font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            VS Code
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-base font-mukta font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            Blog
          </a>

          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-base font-mukta font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
            role="menuitem"
          >
            FAQ
          </a>
        </div>

        <div className="p-2 py-4 bg-gray-100">
          <strong className="block p-2 text-xs font-medium font-poppins uppercase text-gray-500">
            {" "}
            Have an account? Try us{" "}
          </strong>

          <div>
            {userId ? (
              <Link href="/my-notes" className="w-full flex items-center justify-center">
                <button className="font-mukta w-full font-medium bg-gradient-to-r from-[#F28500] to-[#FFBF00] text-white px-5 py-1.5 rounded-md">
                  Dashboard
                </button>
              </Link>
            ) : (
              <div className="flex flex-col justify-center items-center gap-2">
                <Link href="/sign-in" className="w-full">
                  <button className="w-full border border-[#F28500] hover:bg-[#F28500] hover:text-white px-5 py-1.5 rounded-md font-medium font-mukta text-[#F28500]">
                    Login
                  </button>
                </Link>

                <Link href="/sign-up" className="w-full">
                  <button className="font-mukta w-full font-medium bg-gradient-to-r from-[#F28500] to-[#FFBF00] text-white px-5 py-1.5 rounded-md">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
