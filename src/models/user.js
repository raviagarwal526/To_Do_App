import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,"Email Required!!"],
        unique: true, // primary/unique key
    }, 
    password: {
        type: String,
        required: [true,"Password Required!!"]
    }, 
    about: String,
    profileURL: String,
    // address: {
    //     street: String,
    //     city: String,
    //     country: String,
    //     pinCode: Number
    // }
})

export const User = mongoose.models.users || mongoose.model("users", userSchema)