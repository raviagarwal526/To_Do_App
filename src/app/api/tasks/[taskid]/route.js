// api/tasks/{taskid}

import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"

export async function GET(request, {params}){
    const {taskid} = params
    try {
        const task = await Task.findById(taskid)
        return NextResponse.json(task,{
            status:201
        })
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error fetching the task", "404", false)
    }
}

// delete any task
export async function DELETE(request, {params}){
    try {
        const {taskid} = params
        const deletedTask = Task.deleteOne({_id:taskid}) 
        return getResponseMessage("Task deleted..", 200, true)
    } catch (error) {
        console.log(error)
        return getResponseMessage("Task not deleted..", 500, false)
    }
}

//upadte any task
export async function PUT(request, {params}){
    try {
        const {taskid} = params
        const {title, content, status} = await request.json()

        let task = await Task.findById(taskid)
        task.title = title
        task.content = content
        task.status = status
        const updatedTask = await task.save()
        return NextResponse.json(updatedTask,{
            status:201
        })

    } catch (error) {
        console.log(error)
        return getResponseMessage("Task not updated..", 500, false)
    }
}