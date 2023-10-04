import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task){
    const result = await httpAxios
    .post("/api/tasks", task)
    .then((response)=>{
        response.data
    })
    return result
}

export async function getTask(taskId){
  const result = await httpAxios
      .get(`/api/tasks/${taskId}`)
      .then((response) => response.data);
    return result;
}

export async function getTasksOfUser(userId) {
    const result = await httpAxios
      .get(`/api/users/${userId}/tasks`)
      .then((response) => response.data);
    return result;
  }

export async function deleteTask(taskId) {
    const result = await httpAxios
      .delete(`/api/tasks/${taskId}`)
      .then((response) => response.data);
    return result;
  }

export async function editTask(task, taskId) {
  console.log("Data: ",task)
  const result = await httpAxios
    .put(`/api/tasks/${taskId}`, task)
    .then((response) => response.data);
  return result;
}

