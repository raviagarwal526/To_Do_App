import mongoose from "mongoose"
import { User } from "@/models/user"

const config={
    isConnected:0
}

export const connectDB = async() => {
    if(config.isConnected){
        return;
    }

    try{
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "work_manager"
        })
        console.log("DB Connected..")
        config.isConnected = connection.readyState
        // console.log(connection)

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