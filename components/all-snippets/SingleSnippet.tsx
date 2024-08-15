'use client'

import { SingleSnippetType, useGlobalContext } from '@/contexts/ContextApi'
import { Trash } from 'lucide-react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface SingleSnippetProps {
    note: SingleSnippetType;
};

function SingleSnippet({ 
    note 
}: SingleSnippetProps) {
    const {
        openContentNoteObject: { openContentNote, setOpenContentNote },
        selectedSnippetObject: { selectedSnippet, setSelectedSnippet },
    } = useGlobalContext();

    const { title, creationDate, tags, description, code, language, isFavorite } = note;

    return (
        <div
            onClick={() => { 
                    setOpenContentNote(true);
                    setSelectedSnippet(note);
                }
            } 
            className={`flex flex-col gap-2 bg-zinc-100 dark:bg-zinc-900 max-md:w-full w-[250px] h-fit px-3 py-2 rounded-md border hover:border-zinc-300 dark:hover:border-zinc-600
                ${openContentNote ? "max-w-full" : "w-[250px]"}
            `}
        >
            <NoteDate date={creationDate} isFavorite={isFavorite} />
            <NoteHeader title={title} />
            <NoteTags tags={tags} />
            <NoteDescription desc={description} />
            <CodeBlock language="javascript" code={code} />
            <NoteFooter language={language} />
        </div>
    )
}

function NoteHeader({ title }: { title: string }) {
    const truncatedTitle = title.slice(0, 150);

    return (
        <div className="h-[80px] pt-2">
            <span className="font-semibold text-base font-poppins text-zinc-800 dark:text-zinc-300 block overflow-hidden max-h-full">
                {truncatedTitle}...
            </span>
        </div>
    )
}

function NoteDate({ date, isFavorite }: { date: string, isFavorite: boolean }) {
    return (
        <div className="flex justify-between h-[20px] items-center">
            <span className='text-xs font-semibold font-mukta text-gray-700 dark:text-gray-400'>
                {date}
            </span>
            <span>
                <FaRegHeart size={15} className='cursor-pointer' />
            </span>
        </div>
    )
}

function NoteTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap h-[40px] py-1 text-[11px]">
            <span className='space-x-2'>
                {tags.map((tag, index) => (
                    <span
                        key={index} 
                        className='bg-orange-200 dark:bg-orange-500 text-orange-600 dark:text-orange-200 capitalize rounded-md px-2 py-1 font-rubik font-normal'
                    >
                        {tag}
                    </span>
                ))}
            </span>
        </div>
    )
}

function NoteDescription({ desc }: { desc: string }) {
    return (
        <div className='text-zinc-700 h-[60px] dark:text-zinc-200 text-sm font-rubik'>
            {desc}
        </div>
    )
}

interface CodeBlockProps {
    language: string;
    code: string
}

function CodeBlock({
    language,
    code,
}: CodeBlockProps) {
    return (
        <div className='rounded-md overflow-hidden h-[100px] text-xs'>
            <SyntaxHighlighter
                language={language}
                style={{
                    dark
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>

    )
}

function NoteFooter({ language }: { language: string }) {
    return (
        <div className="flex mt-2 pt-2 justify-between items-center text-xs h-[30px] border-t">
            <div className="flex gap-1 items-center font-rubik text-gray-700 dark:text-gray-300">
                <SiJavascript size={15} /> {language}
            </div>
            <Trash className='cursor-pointer hover:text-rose-500' size={15} />
        </div>
    )
}

export default SingleSnippet