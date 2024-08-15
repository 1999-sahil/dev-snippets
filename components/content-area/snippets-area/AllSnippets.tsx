'use client'

import React from 'react'
import SingleSnippet from '../../all-snippets/SingleSnippet'
import { useGlobalContext } from '@/contexts/ContextApi'

function AllSnippets() {
    const {
        allSnippetsObject: { allSnippets },
        isEditSnippetMobileObject: { isEditSnippetMobile },
    } = useGlobalContext();

    return (
        <div className="flex flex-wrap gap-4"
        >
            {allSnippets.map((note, index) => (
                <div key={index}>
                    <SingleSnippet note={note} />
                </div>
            ))}
        </div>
    )
}

export default AllSnippets