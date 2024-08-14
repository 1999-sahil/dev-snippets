"use client";

import { useGlobalContext } from "@/contexts/ContextApi";
import React from "react";

function EditSnippet() {
    const {
        openContentNoteObject: { openContentNote, setOpenContentNote },
        isEditSnippetMobileObject: { isEditSnippetMobile, setIsEditSnippetMobile },
    } = useGlobalContext();

    return (
        <div className={`
                ${openContentNote ? "block" : "hidden"} 
                ${isEditSnippetMobile ? "w-4/5" : "w-1/2"}
                ${isEditSnippetMobile ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}
                bg-red-300 z-50 p-3 rounded-lg border w-1/2 h-[700px]
            `}
        >
            NotesContent
            <div onClick={() => setOpenContentNote(false)}>
                Close
            </div>
        </div>
    )
}

export default EditSnippet