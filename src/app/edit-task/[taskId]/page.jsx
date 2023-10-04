import { editTask, getTask } from '@/services/taskService';
import useRouter from 'next/navigation';
import React, { useState } from 'react'

const EditTask = () => {
    const router = useRouter();
    const { taskId } = router.query;

    const getEditTask = async () => {
        try {
            const task = await getTask(taskId)    
        } catch (error) {
            console.log(error)
        }
    }

    const [data, setData] = useState({
        title:"",
        content:"",
        status:""
    }); 

    const doEdit = async (event) =>{
        event.preventDefault()
        console.log(event)
        console.log(data)
    
        // Validations on field
        if(data.title.trim()==="" || data.title == null){
            toast.warn("Title field is required!!", {
                position:'top-center'
            })
            return;
        }
    
        if(data.content.trim()==="" || data.content == null){
            toast.warn("About field is required!!", {
                position:'top-center'
            })
            return;
        }

        // Form submit
        try {
            const result = await editTask(data)
            console.log(result)
            toast.success("User task is succesfully edited!!", {
                position:'top-center'
            })
        } catch (error) {
            console.log(error)
            toast.error("User signup failed!! " + error.response.data.message , {
                position:'top-center'
            })
        }
      }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-5">
                <div className="py-5">
                    <div className="flex justify-center m-5">
                        {/* <Image src={signupBanner} alt="Signup banner" style={{
                width:"50%"
              }}/> */}
                    </div>
                    <h1 className="text-2xl text-center">Edit task Here</h1>
                    <form action="#!" className="mt-5" onSubmit={doEdit}>
                        {/* {for title} */}
                        <div className="mt-3">
                            <label htmlFor="task_title" className="block text-sm font-medium mb-2 ps-2">Title</label>
                            <input type="text" id="task_title" name="task_title" onChange={event=>{
                                setData({
                                    ...data,
                                    title:event.target.value
                                })
                            }} value={data.title} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
                        </div>
                        {/* {for about section} */}
                        <div className="mt-3">
                            <label htmlFor="task_content" className="block text-sm font-medium mb-2 ps-2">About</label>
                            <textarea id="task_content" rows={8} name="task_content" onChange={event=>{
                                setData({
                                    ...data,
                                    content:event.target.value
                                })
                            }} value={data.content} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></textarea>
                        </div>
                        {/* {task status} */}
                        <div className="mt-4">
                            <label htmlFor="task_status" className="block text-sm font-medium mb-2">Task status</label>
                            <select id="task_status" name="task_status" onChange={(event)=>{
                            setData({
                                ...data,
                                status:event.target.value,
                            })
                            }} value={data.status} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800">
                                <option value="none" disabled>--- Select-Status ---</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <div className="mt-3 text-center">
                            <button type="submit" className="px-2 py-3 bg-green-600 rounded hover:bg-green-900">Save Changes</button>
                        </div>
                        {/* {JSON.stringify(data)} */}
                    </form>
                </div>
            </div>
        </div>
      )
}

export default EditTask