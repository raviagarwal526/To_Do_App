async function TakeTime(){
    await new Promise((resolve)=>{
        setTimeout(resolve,3000)
    })
}

export default async function AdminProfile(){
    await TakeTime()
    throw new Error("Trial error")
    return(
        <div>
            <h1>
                This is admin profile route
            </h1>
        </div>
    );
}