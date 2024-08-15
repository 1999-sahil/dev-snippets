'use client'

import React from 'react'
import TopBar from '../topbar/Topbar'
import SnippetArea from './snippets-area/SnippetArea'

function ContentArea() {
    return (
        <div className='flex flex-col w-full gap-8'>
            <TopBar />
            <SnippetArea />
        </div>
    )
}

export default ContentArea