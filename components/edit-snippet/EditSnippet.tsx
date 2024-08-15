"use client";

import { SingleSnippetType, useGlobalContext } from "@/contexts/ContextApi";
import React, { useEffect, useState } from "react";

function EditSnippet() {
    const {
        openContentNoteObject: { openContentNote, setOpenContentNote },
        isEditSnippetMobileObject: { isEditSnippetMobile, setIsEditSnippetMobile },
        selectedSnippetObject: { selectedSnippet, setSelectedSnippet },
    } = useGlobalContext();

    const [singleSnippet, setSingleSnippet] = useState<SingleSnippetType | undefined>(undefined);

    useEffect(() => {
        if (openContentNote) {
            if (selectedSnippet) {
                setSingleSnippet(selectedSnippet);
            }
        }
    }, [openContentNote, selectedSnippet]);

    console.log(singleSnippet);

    return (
        <div className={`
                ${openContentNote ? "block" : "hidden"} 
                ${isEditSnippetMobile ? "w-[90%]" : "w-1/2"}
                ${isEditSnippetMobile ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}
                bg-gray-400 z-50 p-3 mx-auto rounded-lg border w-1/2 h-[700px]
            `}
        >
            {singleSnippet && (
                <ContentNoteHeader
                    singleSnippet={singleSnippet}
                    setSingleSnippet={setSingleSnippet}
                />
            )}
            <div onClick={() => setOpenContentNote(false)}>
                Close
            </div>
        </div>
    )
}

function ContentNoteHeader({
    singleSnippet,
    setSingleSnippet,
} : {
    singleSnippet: SingleSnippetType;
    setSingleSnippet: React.Dispatch<React.SetStateAction<SingleSnippetType | undefined>>;
}) {

    const {
        allSnippetsObject: { allSnippets, setAllSnippets },
    } = useGlobalContext();

    const onUpdateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        // create a new singleSnippet with the new title
        const newSingleSnippet = { ...singleSnippet, title: event.target.value };
        setSingleSnippet(newSingleSnippet);

        // updating the allSnippet with the new singleSnippet
        const newAllSnippet = allSnippets.map((note) => {
            if (note.id === singleSnippet.id) {
                return newSingleSnippet;
            }
            return note;
        });
        setAllSnippets(newAllSnippet);
    };

    return (
        <div className="">
            <input
                placeholder="Edit your snippet title..."
                value={singleSnippet.title}
                onChange={onUpdateTitle}
            />
        </div>
    )
}

export default EditSnippet