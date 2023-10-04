import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Task = ({ task, deleteTaskParent}) => {
  const { user } = useContext(UserContext);
  const router = useRouter()
  function deleteTask(taskId) {
    // ....
    deleteTaskParent(taskId);
  }

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status == "completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="shadow-lg hover:bg-gray-900 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer "
          >
            <RxCross1 />
          </span>
        </div>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status: <span className="font-bold">{task.status}</span>
          </p>
          <p className="text-right">
            <Link href={{
              pathname:"/edit-task",
              query:{
                taskId:task._id
              }
            }}>
              <span
                className="shadow-lg hover:bg-gray-900 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer "
                >
                <AiFillEdit/>
              </span>
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
