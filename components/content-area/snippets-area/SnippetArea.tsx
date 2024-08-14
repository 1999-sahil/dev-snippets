'use client'

import React from 'react'
import TagSwiper from './TagSwiper'
import AllSnippets from './AllSnippets'
import EditSnippet from '@/components/edit-snippet/EditSnippet'
import { useGlobalContext } from '@/contexts/ContextApi'

function SnippetArea() {
    const {
        openContentNoteObject: { openContentNote, setOpenContentNote },
    } = useGlobalContext();

    return (
        <div className='flex gap-2'>
            <div className={`${openContentNote ? 'w-1/2' : 'w-full'} flex flex-col gap-4`}>
                <TagSwiper />
                <AllSnippets />
            </div>
            <EditSnippet />
        </div>
    )
}

export default SnippetArea