"use client";

import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'

function UserProfile() {
    const { user } = useUser();
    const imageUrl = user?.imageUrl;

    const loadingImage = (
        <div className="w-9 h-9 rounded-full mb-[5px] bg-slate-200"></div>
    );

    const loadingUserName = (
        <span className='font-semobold bg-slate-100 h-4 w-[100px]'></span>
    );

    const loadingUserEmail = (
        <span className='text-slate-500 text-[11px] bg-slate-100 h-2 w-[130px]'></span>
    );

    return (
        <div className='flex gap-3 items-center'>
            {!user ? (
                loadingImage
            ) : (
                <Image
                    src={imageUrl || '/logo.png'}
                    alt="user-profile"
                    width={50}
                    height={50}
                    className='w-9 h-9 rounded-full mb-[5px] object-contain'
                />
            )}

            <div className={`flex flex-col text-sm ${!user ? "gap-1" : ""}`}>
                {!user ? (
                    loadingUserName
                ) : (
                    <span className="font-semibold text-gray-100 font-mukta">
                        {user?.firstName} {user?.lastName}
                    </span>
                )}
                
                {!user ? (
                    loadingUserEmail
                ) : (
                    <span className="text-gray-500 text-[11px] font-poppins">
                        {user?.emailAddresses[0].emailAddress}
                    </span>
                )}
            </div>
        </div>
    )
}

export default UserProfile