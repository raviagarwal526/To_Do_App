// /tasks

import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"
import Jwt from "jsonwebtoken"
import { connectDB } from "@/helper/db"

connectDB()

// get all tasks
export async function GET(request){
    try {
        const tasks = await Task.find()
        return NextResponse.json(tasks,{
            status:200
        })
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in fetching Data..", 404, false)
    }
}

// create tasks
export async function POST (request){
    const {title, content, userId, status} = await request.json()

    // fetching userid from authToken cookie
    const authToken = request.cookies.get("authToken")?.value
    const data = Jwt.verify(authToken, process.env.JWT_KEY)
    console.log(data._id)

    try {
        const task = new Task({
            title, content, userId:data._id, status 
        })
        const createdTask = await task.save()
        return NextResponse.json(createdTask,{
            status: 201
        })
    } catch (error) {
        console.log(error)
        return getResponseMessage("Error in Creating Tasks..", 500, false)
    }
}