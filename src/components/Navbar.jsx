import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
        <a className='text-4xl text-white sm:text-6xl font-semibold' href='/'>LOGO</a>
        <div className='menu'>
            <ul className='flex sm:text-lg text-white'>
                <li className='px-1 sm:px-3'><a href=''>Home</a></li>
                <li className='px-1 sm:px-3'><a href=''>About</a></li>
                <li className='px-1 sm:px-3'><a href=''>Projects</a></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar