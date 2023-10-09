'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import LoginSvg from '../../assets/undraw_two_factor_authentication_namy.svg'
import { toast } from 'react-toastify'
import { login } from "@/services/userService";
import { useRouter } from 'next/navigation'
import UserContext from '@/context/userContext'

const Login = () => {

  const router = useRouter();
  const context = useContext(UserContext);

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(data);
    if (data.email.trim() === "" || data.password.trim() === "") {
      toast.info("Invalid Data !!", {
        position: "top-center",
      });
      return;
    }

    try {
      const result = await login(data);
      console.log(result);
      toast.success("Logged In", {
        position: "top-right"
      });
      //redirect
      context.setUser(result.user);
      router.push("/")
  
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center"
      })
    }
  }

  

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4 col-start-5'>
        <div className='py-5'>
        <div className=' flex justify-center'>
          <Image src={LoginSvg} alt='SignUp_Image' style={{
            width: "60%",
          }} />
        </div>
          <h1 className=' mt-5 text-3xl uppercase text-center'>Login </h1>    
          <form action="#!" onSubmit={handleLogin}>

          <div className='mt-4'>
          <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="user_email" name='user_email' 
          onChange={event => {
            setData({
              ...data,
              email: event.target.value
            });
          }} 
          value={data.email}
          placeholder="Enter your email here" required
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className='mt-4'>
          <label htmlFor="user_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="user_password" id="user_password" 
          onChange={event => {
            setData({
              ...data,
              password: event.target.value
            });
          }}
          value={data.password}
          placeholder="••••••••"  required
          className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className='mt-8 text-center'>
          <button type="submit" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-blue-800">Login</button>
          </div>

          </form>
        </div>
        {/* {JSON.stringify(data)}; */}
      </div>
    </div>
  )
}

export default Login;