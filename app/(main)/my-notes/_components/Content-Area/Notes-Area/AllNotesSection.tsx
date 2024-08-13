'use client'

import React from 'react'
import SingleNote from './SingleNote'

function AllNotesSection() {
    return (
        <div className='mt-5 flex flex-wrap gap-4'>
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
        </div>
    )
}

export default AllNotesSection