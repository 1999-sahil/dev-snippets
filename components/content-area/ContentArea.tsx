'use client'

import React from 'react'
import TopBar from '../topbar/Topbar'
import TagSwiper from './TagSwiper'
import AllSnippets from './AllSnippets'

function ContentArea() {
    return (
        <div className='flex flex-col w-full gap-8 m-2 sm:m-6'>
            <TopBar />
            <TagSwiper />
            <AllSnippets />
        </div>
    )
}

export default ContentArea