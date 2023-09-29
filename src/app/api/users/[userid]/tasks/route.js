import { Task } from "@/models/task"
import { NextResponse } from "next/server"

// /api/users/{userid}/tasks
export async function GET(request, {params}){
    const {userid} = params
    try {
        const tasks = await Task.find({
            userId:userid 
        })
        return NextResponse.json(tasks, {
            status:201
        })
    } catch (error) {
        console.log(error)
        return getResponseMessage("Tasks not able to fetch for particular user..", 404, false)
    }
}