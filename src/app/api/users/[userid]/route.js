import { User } from "@/models/user";
import { NextResponse } from "next/server";

//alternate way for above using arrow funcs
// export const GET = () =>{

// }

export async function GET(request, {params}){
    try {
        const {userid} = params
        const user = await User.findById(userid)
        return NextResponse.json(user)    
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"error in fetching data.."
            ,status:false
        })    
    }
}


// delete usetr
export async function DELETE(request, {params}){
    const userid = params.userid
    
    try {
        await User.deleteOne({
            _id:userid
        })

        return NextResponse.json({
            message:"Record successfully deleted.."
            ,status:true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Record was not successfully deleted.."
            ,status:false
        })
    }
}

// update user
export async function PUT(request, {params}){
    const {userid} = params

    const {name, email, password, about, profileURL} = await request.json()

    try {
        const user = await User.findById(userid)
        user.name = name
        user.password = password
        user.about = about
        user.profileURL = profileURL
        const updatedUser = await user.save()

        return NextResponse.json(updatedUser,{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Record was not successfully updated.."
            ,status:false
        })   
    }
}