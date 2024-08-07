import React from 'react'

function MobileNavigation() {
    return (
        <div className="relative">

            <div
                className="absolute end-0 z-10 w-72 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
            >
                <div className="p-2">
                    <strong className="block p-2 text-xs font-medium font-poppins uppercase text-gray-400"> General </strong>

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
                    <strong className="block p-2 text-xs font-medium font-poppins uppercase text-gray-500"> Have an account? Try us </strong>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <button className='font-mukta font-medium text-white bg-gradient-to-r from-[#F28500] to-[#FFBF00] w-full rounded-md p-1'>
                            Login
                        </button>
                        <button className='font-mukta font-medium text-[#F28500] hover:text-white border border-[#F28500] hover:bg-gradient-to-r from-[#F28500] to-[#FFBF00] w-full rounded-md p-1'>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigation