"use client"

import React, { useState } from 'react'
import login from'../../assets/login.svg'
import Image from 'next/image'
import { addTask } from '@/services/taskService';
import { toast } from 'react-toastify';

const AddTask = () => {
  //document.title = metadata.title
  const [task, setTask] = useState({
    title:"",
    content:"",
    status:"none",
    userId:"6515636b86986f86b545c873"
  });

  const handleAddTask = async (event)=>{
    event.preventDefault();
    console.log(task)
    try {
      const result = await addTask(task);
      console.log(result)
      toast.success("Your task is added!",{
        position:'top-center'
      })

      setTask({
        title:"",
        content:"",
        status:"none",
      });
    } catch (error) {
      console.log(error)
      toast.error("Your task is added!",{
        position:'top-center'
      })
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center mt-4">
      <div className="col-span-6 col-start-4 p-5 shadow-sm">
        <div className="my-8 flex justify-center">
          <Image src={login} style={{
            width:"50%"
          }} alt="Login banner"/>
        </div>
        <h1 className="text-3xl text-center">
          Add your Task here -
        </h1>
        <form action="#!" onSubmit={handleAddTask}>
          {/* {task title} */}
          <div className="mt-4">
            <label htmlFor="task_title" className="block text-sm font-medium mb-2">Title</label>
            <input type="text" id="task_title" name="task_title" onChange={(event)=>{
              setTask({
                ...task,
                title:event.target.value,
              })
            }} value={task.title} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
          </div>
          {/* {task content} */}
          <div className="mt-4">
            <label htmlFor="task_content" className="block text-sm font-medium mb-2">Content</label>
            <textarea id="task_content" rows={3} name="task_content" onChange={(event)=>{
              setTask({
                ...task,
                content:event.target.value,
              })
            }} value={task.content} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></textarea>
          </div>
          {/* {task status} */}
          <div className="mt-4">
            <label htmlFor="task_status" className="block text-sm font-medium mb-2">Task status</label>
            <select id="task_status" name="task_status" onChange={(event)=>{
              setTask({
                ...task,
                status:event.target.value,
              })
            }} value={task.status} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800">
              <option value="none" disabled>--- Select-Status ---</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {/* {Submit button} */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-900">Add Task</button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-900 ms-4">Clear</button>
          </div>
          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  )
}

export default AddTask