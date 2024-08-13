"use client";

import { useGlobalContext } from "@/contexts/ContextApi";
import React from "react";

function EditSnippet() {
    const {
        openContentNoteObject: { openContentNote, setOpenContentNote },
    } = useGlobalContext();

    return (
        <div className={`${openContentNote ? "block" : "hidden"} bg-red-500 rounded-lg border w-1/2 h-[700px]`}>
            NotesContent
            <div onClick={() => setOpenContentNote(false)}>
                Close
            </div>
        </div>
    )
}

export default EditSnippet