import { connectDB } from "@/helper/db"
import { User } from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt';



connectDB()

export async function GET(request){
    // const users = [{
    //     name:"Ravi Agarwal",
    //     Mob:8690993561,
    //     Age:23
    // }, {
    //     name:"Nikunj Agarwal",
    //     Mob:8690993561,
    //     Age:23
    // }, {
    //     name:"Gaurav Agarwal",
    //     Mob:8690993561,
    //     Age:23
    // }]
    // return NextResponse.json(users)

    // get data from databse
    let users = []
    try{
        users = await User.find()
        return NextResponse.json(users,{
            status:200
        })
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"Error in fetching records of user collection",
            status:false
        })
    }
}

export async function POST(request){
    // const body = request.body
    // console.log(body)
    // const method = request.method
    // console.log(body)

    // const jsonData = await request.json()
    // console.log(jsonData)

    // return NextResponse.json(
    //     {message:"Posting user Data..."}
    // )

    //fetch data from user
    const {name, email, password, about, profileURL} = await request.json()

    const user = new User({
        name, email, password, about, profileURL
    })

    try{
        // Encrypted password stored in database
        user.password = bcrypt.hashSync(
            user.password,
            parseInt(process.env.BCRYPT_SALT) 
        );
        const userCreated = await user.save()
        const response = NextResponse.json(user,{
            status:201
        })
        return response

    }catch(error){
        console.log(error)

        return NextResponse.json({
            message:"Error in creating user..",
            status:false
        },{
            status:500
        })
    }
    
}

export function PUT(){
    
}