'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-36 mt-5 bg-cyan-700'>
      <div className=' h-full flex justify-around px-4 py-4'>
        <div className='mt-6'>
          <h1 className='text-3xl'>Lets Manage Your Life Effeciently</h1>
          <p className='text-xs'>A Unique task manager that helps you manage your daily task and todos efficiently with a proper system</p>
        </div>
        <div className='text-center mt-6'>
          <h1>Important Links</h1>
          <ul className='flex space-x-3'>
            <li><a href="#"></a>Github</li>
            <li><a href="#"></a>Twitter</li>
            <li><a href="#"></a>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer