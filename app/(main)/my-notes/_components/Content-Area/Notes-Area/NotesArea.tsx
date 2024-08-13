'use client'

import React from 'react'
import SwiperSelection from '../Tags-Area/SwiperSelection'
import AllNotesSection from './AllNotesSection'
import { useGlobalContext } from '@/contexts/ContextApi'
import NotesContent from './Edit-Notes/notes-content'

function NotesArea() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
  } = useGlobalContext();

  return (
    <div className='flex gap-2'>
      <div className={`${openContentNote ? 'w-1/2' : 'w-full'}`}>
        <SwiperSelection />
        <AllNotesSection />
      </div>
      <NotesContent />
    </div>
  )
}

export default NotesArea