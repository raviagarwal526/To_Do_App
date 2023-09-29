import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: [true,"Content Required!!"],
        //unique: true, // primary/unique key
    }, 
    addeddate: {
        type: Date,
        default: Date.now(),
        required: [true,"addeddate Required!!"],
    },
    status:{
        type: String,
        enum: ["pending","completed"],
        default: "pending"
    },
    userId:{
        type: mongoose.ObjectId,
        required: true
    }
})

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema)
