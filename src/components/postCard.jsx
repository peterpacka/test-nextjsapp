'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({short_title, author, content, post_url, date, views, likes, shares}) => {
  return (
    <article className='drop-shadow-sm bg-[#f1f1f1] mx-auto w-[90%] 2xl:max-w-[50rem] max-w-[30rem] min-w-[300px] px-3 pt-5 grid grid-rows-[4rem_6rem_2rem_2rem] md:grid-rows-[6rem_11rem_2rem_2rem] grid-cols-[1fr_8rem] sm:grid-cols-[1fr_10rem]'>
        <h2 className=' text-xl md:text-2xl overflow-scroll w-[95%] font-bold max-h-[90%]'>{short_title}</h2>
        <span className=' text-sm text-right overflow-scroll w-[95%] text-[#787878]'>author: {author}</span>
        <p className='text-[0.9rem] max-h-[95%] overflow-hidden w-[99%] col-span-2'>{content}</p>
        <div className='flex justify-between items-center col-span-2'>
            <Link href={post_url} className='text-blue-800 underline hover:text-blue-700'>View post</Link>
            <div className='space-x-3 '>
                <button className='text-black underline'>Like post</button>
                <button className='underline text-gray-800 hover:text-gray-700'>Share post</button>
            </div>
        </div>
        <div className='col-span-2 overflow-x-scroll'>
            <div className='min-w-[340px] flex justify-between items-center'>
                <span className='text-sm text-[#787878]'>{date}</span>
                <div className='text-sm text-[#787878] text-right space-x-2'>
                    <span>{views} views</span>
                    <span className='text-[#7e5d5d]'>{likes} likes</span>
                    <span className='text-gray-700'>{shares} shares</span>
                </div>
            </div>
        </div>


        
    </article>
  )
}

export default PostCard