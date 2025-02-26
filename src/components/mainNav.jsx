import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MainNav = () => {
  return (
    <nav className='w-full h-[4rem] text-center mt-3'>
        <div className='space-x-1'>
            <input className='w-[15rem] md:w-[20rem] lg:w-[30rem] outline-none focus-within:border-black transition-all duration-75 rounded-md lg:text-lg lg:py-3 md:py-2 py-1 px-1 bg-[#f1f1f1] border shadow-sm' placeholder='Search for topics, posts, or keywords...'></input>
            <button className='bg-[#f1f1f1] transition-all duration-75 hover:border-black md:py-2 py-1 lg:text-lg lg:py-3 px-3 lg:px-4 rounded-md border shadow-sm'>Search</button>
        </div>
        
    </nav>
  )
}

export default MainNav