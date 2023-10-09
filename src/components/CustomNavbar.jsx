"use client"

import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout(){
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push('/login');

    } catch (error) {
      console.log(error);
      toast.error("Error logging out");
    }
  }


  return (
    <nav className="bg-cyan-700 h-14 py-2 px-3 flex justify-between items-center">
      <div className='brand text-2xl font-semibold'>
        <h1>
          <Link href={'#!'}>Task Manager</Link>
        </h1>
      </div>
      <div>
        <ul className='flex space-x-4'>
          {
            context.user && (
              <>
              <li>
                <Link href={'/'} className='hover:text-blue-300'>Home</Link>
              </li>
              <li>
                <Link href={'show-task'} className='hover:text-blue-300'>Show All Tasks</Link>
              </li>
              <li>
                <Link href={'/add-task'} className='hover:text-blue-300'>Add Task</Link>
              </li>
              </>
            )
          }
        </ul>
      </div>
      <div>
        <ul className='flex space-x-3'>
          {
            context.user && (
              <>
              <li>
                <button className='hover:text-blue-300'>{context.user.name}</button>
              </li>
              <li>
              <button className='hover:text-blue-300' onClick={doLogout}>Logout</button>
              </li>
              </>
            )
          }

          {
            !context.user && (
              <>
              <li>
                <Link href={'/login'} className='hover:text-blue-300'>Login</Link>
              </li>
              <li>
                <Link href={'/signup'} className='hover:text-blue-300'>Sign Up</Link>
              </li>
              </>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default CustomNavbar