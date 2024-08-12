'use client';

import React, { useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';
//import GlobalContextProvider, { useGlobalContext } from '@/contexts/ContextApi';
import { Plus } from 'lucide-react';

function SwiperSelection() {
    return (
        <div className="p-3 rounded-lg flex gap-5 bg-zinc-200/50 dark:bg-zinc-900 text-gray-800 dark:text-white">
            <div className='overflow-x-auto flex w-full'>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={10}
                    freeMode={true}
                    className='mySwiper'
                    modules={[FreeMode]}
                >
                    <SwiperSlide className='bg-[#F28500] p-1 rounded-md text-white w-20'>All</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>Javascript</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>Typescript</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>Java</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>Django</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>Python</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>ReactJs</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>Vercel</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>Frontend</SwiperSlide>
                    <SwiperSlide className='text-gray-800 dark:text-gray-200'>DevOps</SwiperSlide>
                </Swiper>
                <button className='bg-[#F28500] p-1 rounded-md px-2.5 flex gap-1 items-center text-white'>
                    <Plus className='' />
                    <span className=''>Tag</span>
                </button>
            </div>
        </div>
    )
}

export default SwiperSelection