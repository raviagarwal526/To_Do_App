import mongoose from "mongoose"
import { User } from "@/models/user"

export const connectDB = async() => {
    try{
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "work_manager"
        })
        console.log("DB Connected..")
        //console.log(connection)

        // const user = new User({
        //     name:"Ravi agarwal",
        //     email:"agarwalravi@gmail.com",
        //     password:"test123",
        //     about:"test123"
        // })

        // await user.save()

        //console.log("User is created..")
    }catch(error){
        console.log("DB connection failed..")
        console.log(error)
    }
}