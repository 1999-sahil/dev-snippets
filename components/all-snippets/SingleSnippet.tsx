'use client'

import { useGlobalContext } from '@/contexts/ContextApi'
import { Trash } from 'lucide-react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function SingleSnippet() {
    const {
        openContentNoteObject: { openContentNote, setOpenContentNote }
    } = useGlobalContext();

    return (
        <div onClick={() => setOpenContentNote(true)} className={`bg-zinc-200/50 dark:bg-zinc-900 max-sm:w-full w-[280px] rounded-md py-4 ${openContentNote ? "w-full" : "w-[380px]"}`}>
            <NoteHeader />
            <NoteDate />
            <NoteTags />
            <NoteDescription />
            <CodeBlock language="javascript" />
            <NoteFooter />
        </div>
    )
}

function NoteHeader() {
    return (
        <div className="flex justify-between mx-4">
            <span className="font-bold text-lg w-[87%]">
                Lorem ipsum dolor sit amet. Non unde natus
            </span>
            <FaRegHeart />
        </div>
    )
}

function NoteDate() {
    return (
        <div className="flex gap-1 font-light mx-4 mt-1">
            <span className=''>Aug 12, 2024</span>
        </div>
    )
}

function NoteTags() {
    return (
        <div className="flex flex-wrap gap-1 text-[11px] mx-4 mt-4">
            <span className='p-1 rounded-md px-2 bg-orange-100 text-[#F28500]'>functions</span>
            <span className='p-1 rounded-md px-2 bg-orange-100 text-[#F28500]'>functions</span>
            <span className='p-1 rounded-md px-2 bg-orange-100 text-[#F28500]'>functions</span>
            <span className='p-1 rounded-md px-2 bg-orange-100 text-[#F28500]'>functions</span>
            <span className='p-1 rounded-md px-2 bg-orange-100 text-[#F28500]'>functions</span>
        </div>
    )
}

function NoteDescription() {
    return (
        <div className='text-zinc-700 dark:text-zinc-200 mt-4 mx-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quos quisquam atque perspiciatis explicabo rerum, deleniti consequatur molestiae tenetur ex maxime voluptates dolore, suscipit repellendus harum ab eligendi soluta sunt!
        </div>
    )
}

interface CodeBlockProps {
    language: string;
}

function CodeBlock({
    language,
}: CodeBlockProps) {
    const codeString = `
        import React from 'react';

        function fun() {
            return (
                <div>Hello, World</div>
            )
        }

        export default fun;
    `
    return (
        <div className='rounded-md overflow-hidden text-sm'>
            <SyntaxHighlighter
                language={language}
                style={{
                    lightfair,
                    dark:dark
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>

    )
}

function NoteFooter() {
    return (
        <div className="flex justify-between text-[13px] mx-4 mt-3">
            <div className="flex gap-1 items-center">
                <SiJavascript /> Javascript
            </div>
            <Trash />
        </div>
    )
}

export default SingleSnippet