"use client";
import React, { useEffect, useState } from 'react'
import AddTodoSvg from '../../assets/undraw_add_information_j2wg-2.svg'
import Image from 'next/image';
import { addTask } from '@/services/taskService';
import {toast} from 'react-toastify';


const AddTaskComponent = () => {

  const [task, setTask] = useState({
    title: '',
    content: '',
    status: 'none',
    userId: '64e33611aa6dffd387d1aaec',
  });

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(task);

    // Validate Task Data
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Task Added Sucessfully",{
        position: "top-right"
      });

      setTask({
        title: "",
        content: "",
        status: "none"
      });
      
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task", {
        position: "top-right"
      })
    }
  }

  return (
    <div className='grid grid-cols-12 justify-center'>
      <div className='col-span-6 col-start-4 p-5'>
        <div className='my-6 flex justify-center'>
          <Image src={AddTodoSvg} alt='Add_Task_Image' style={{
            width: "60%",
          }} />
        </div>
      <h1 className='text-3xl mt-5 uppercase text-center'>Add Your Task</h1>
      <form action='#!' onSubmit={handleForm}>
          <div className='mt-4'>
          <label htmlFor="task_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input type="text" id="task_title" name='task_title' onChange={(event) => {
            setTask({
              ...task,
              title: event.target.value,
            });
          }}
          value={task.title} 
          placeholder="Write Title here"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className='mt-4'>
          <label htmlFor="task_content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
          <textarea id="task_content" name='task_content' rows="4"
          onChange={(event) => {
            setTask({
              ...task,
              content: event.target.value,
            });
          }}
          value={task.content}
          placeholder="Write Description here"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>
          <div className='mt-4'>
          <label htmlFor="task_status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <select id="task_status" 
          name='task_status'
          onChange={(event) => {
            setTask({
              ...task,
              status: event.target.value,
            });
          }}
          value={task.status}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="none" disabled>Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="working">Working</option>
          </select>
          </div>
          <div className='mt-8 flex space-x-6'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear</button>
          </div>
          {/* {JSON.stringify(task)} */}
      </form>
      </div>
    </div>
  );
}

export default AddTaskComponent;
