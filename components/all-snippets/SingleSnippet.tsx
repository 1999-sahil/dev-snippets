'use client'

import { useGlobalContext } from '@/contexts/ContextApi'
import { Trash } from 'lucide-react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function SingleSnippet() {
    const {
        openContentNoteObject: { openContentNote, setOpenContentNote }
    } = useGlobalContext();

    return (
        <div
            onClick={() => setOpenContentNote(true)} 
            className={`bg-zinc-200/50 dark:bg-zinc-900 max-sm:w-full w-[260px] rounded-md pt-4 border hover:border-zinc-400 dark:hover:border-zinc-600
                ${openContentNote ? "w-full" : "w-[380px]"}
            `}
        >
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
            <span className="font-semibold text-base w-[87%] font-poppins text-orange-500">
                {`React.js hook for state management useState() and useEffect()`}
            </span>
            <FaRegHeart size={15} className='cursor-pointer' />
        </div>
    )
}

function NoteDate() {
    return (
        <div className="flex gap-1 font-light mx-4 mt-1">
            <span className='text-sm font-semibold font-mukta text-gray-700 dark:text-gray-400'>Aug 12, 2024</span>
        </div>
    )
}

function NoteTags() {
    return (
        <div className="flex flex-wrap gap-1 text-[11px] mx-4 mt-4">
            <span className='p-1 font-rubik rounded-3xl px-2 bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-300'>
                functions
            </span>
            <span className='p-1 font-rubik rounded-3xl px-2 bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-300'>
                javascript
            </span>
            <span className='p-1 font-rubik rounded-3xl px-2 bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-300'>
                reactjs
            </span>
            <span className='p-1 font-rubik rounded-3xl px-2 bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-300'>
                nextjs
            </span>
            <span className='p-1 font-rubik rounded-3xl px-2 bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-300'>
                SSR
            </span>
        </div>
    )
}

function NoteDescription() {
    return (
        <div className='text-zinc-700 dark:text-zinc-200 mt-4 mx-4 text-sm font-rubik'>
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
        <div className='rounded-md overflow-hidden text-xs p-2'>
            <SyntaxHighlighter
                language={language}
                style={{
                    dark
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>

    )
}

function NoteFooter() {
    return (
        <div className="flex justify-between text-xs mt-3 px-4 py-3 border-t">
            <div className="flex gap-1 items-center font-rubik text-gray-700 dark:text-gray-300">
                <SiJavascript size={15} /> Javascript
            </div>
            <Trash className='cursor-pointer hover:text-rose-500' size={15} />
        </div>
    )
}

export default SingleSnippet