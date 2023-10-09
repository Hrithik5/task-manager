'use client';

import React, { useState } from 'react'
import SignUpSvg from '../../assets/undraw_access_account_re_8spm.svg'
import Image from 'next/image';
import { signUp } from '@/services/userService';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_960_720.png",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    // console.log(userData);

    try {
      const result = await signUp(userData);
      console.log(result);
      toast.success("User created Sucessfully", {
        position: "top-right"
      });

      setUserData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_960_720.png"
      });

      router.push('/login');
      // console.log(userData);

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-right"
      })
    }
  }
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4 col-start-5'>
        <div className='py-5'>
        <div className=' flex justify-center'>
          <Image src={SignUpSvg} alt='SignUp_Image' style={{
            width: "30%",
          }} />
        </div>
          <h1 className=' mt-2 text-3xl uppercase'>Create a new Account</h1>    
          <form action="#!" onSubmit={handleSignUp}>

          <div className='mt-4'>
          <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" id="user_name" name='user_name' 
          onChange={event => {
            setUserData({
              ...userData,
              name: event.target.value
            });
          }} 
          value={userData.name}
          placeholder="Create your username here" required
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className='mt-4'>
          <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="user_email" name='user_email' 
          onChange={event => {
            setUserData({
              ...userData,
              email: event.target.value
            })
          }} 
          value={userData.email}
          placeholder="Enter your email here" required
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className='mt-4'>
          <label htmlFor="user_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="user_password" id="user_password" 
          onChange={event => {
            setUserData({
              ...userData,
              password: event.target.value
            })
          }}
          value={userData.password}
          placeholder="••••••••"  required
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className='mt-4'>
          <label htmlFor="user_about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About</label>
          <textarea type="text" id="user_about" name='user_about' 
          onChange={event => {
            setUserData({
              ...userData,
              about: event.target.value
            })
          }} 
          value={userData.about}
          placeholder="Write your description here" rows={4} required
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className='mt-8 text-center'>
          <button type="submit" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800">Signup</button>
          </div>

          </form>
        </div>
        {/* {JSON.stringify(userData)}; */}
      </div>
    </div>
  )
}

export default Signup