import { httpAxios } from "@/helper/httpHelper";

export async function signUp(task){
    const result = await httpAxios.post("/api/users", task).then((response)=>{
        response.data
    })
    return result
}