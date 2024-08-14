'use client'

import React from 'react'
import SingleSnippet from '../../all-snippets/SingleSnippet'

function AllSnippets() {
    return (
        <div className='flex flex-wrap gap-6'>
            <SingleSnippet />
            <SingleSnippet />
            <SingleSnippet />
            <SingleSnippet />
        </div>
    )
}

export default AllSnippets