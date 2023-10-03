"use client"
import React, { useState } from 'react'
import signupBanner from'../../assets/signup.svg'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { signUp } from '@/services/userservice'

const SignUp = () => {

  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    about:"",
    profileURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F5561%2F5561205.png&tbnid=9BAVRlUTnfgovM&vet=10CBQQxiAoB2oXChMIsKyGm5TZgQMVAAAAAB0AAAAAECY..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ficon%2Fuser-avatar_5561205&docid=444qS0mGfPX9tM&w=512&h=512&itg=1&q=default%20profile%20url&ved=0CBQQxiAoB2oXChMIsKyGm5TZgQMVAAAAAB0AAAAAECY"
  });  

  const doSignUp = async (event) =>{
    event.preventDefault()
    console.log(event)
    console.log(data)

    // Validations on field
    if(data.name.trim()==="" || data.name == null){
        toast.warn("Name field is required!!", {
            position:'top-center'
        })
        return;
    }

    if(data.email.trim()==="" || data.email == null){
        toast.warn("Email field is required!!", {
            position:'top-center'
        })
        return;
    }

    if(data.password.trim()==="" || data.password == null){
        toast.warn("Password field is required!!", {
            position:'top-center'
        })
        return;
    }

    // Form submit
    try {
        const result = await signUp(data)
        console.log(result)
        toast.success("User is succesfully registered!!", {
            position:'top-center'
        })
        setData({
            name:"",
            email:"",
            password:"",
            about:"",
            profileURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F5561%2F5561205.png&tbnid=9BAVRlUTnfgovM&vet=10CBQQxiAoB2oXChMIsKyGm5TZgQMVAAAAAB0AAAAAECY..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ficon%2Fuser-avatar_5561205&docid=444qS0mGfPX9tM&w=512&h=512&itg=1&q=default%20profile%20url&ved=0CBQQxiAoB2oXChMIsKyGm5TZgQMVAAAAAB0AAAAAECY"  
        })
    } catch (error) {
        console.log(error)
        toast.error("User signup failed!! " + error.response.data.message , {
            position:'top-center'
        })
    }
  }

  const resetForm = () => {
    setData({
        name:"",
        email:"",
        password:"",
        about:"",
        profileURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F5561%2F5561205.png&tbnid=9BAVRlUTnfgovM&vet=10CBQQxiAoB2oXChMIsKyGm5TZgQMVAAAAAB0AAAAAECY..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ficon%2Fuser-avatar_5561205&docid=444qS0mGfPX9tM&w=512&h=512&itg=1&q=default%20profile%20url&ved=0CBQQxiAoB2oXChMIsKyGm5TZgQMVAAAAAB0AAAAAECY"  
    })}

  return (
    <div className="grid grid-cols-12">
        <div className="col-span-4 col-start-5">
            <div className="py-5">
                <div className="flex justify-center m-5">
                    <Image src={signupBanner} alt="Signup banner" style={{
            width:"50%"
          }}/>
                </div>
                <h1 className="text-2xl text-center">SignUp Here</h1>
                <form action="#!" className="mt-5" onSubmit={doSignUp}>
                    {/* {for username} */}
                    <div className="mt-3">
                        <label htmlFor="user_name" className="block text-sm font-medium mb-2 ps-2">Username</label>
                        <input type="text" id="user_name" name="user_name" onChange={event=>{
                            setData({
                                ...data,
                                name:event.target.value
                            })
                        }} value={data.name} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
                    </div>
                    {/* {for email} */}
                    <div className="mt-3">
                        <label htmlFor="user_email" className="block text-sm font-medium mb-2 ps-2">Email</label>
                        <input type="email" id="user_email" name="user_email" onChange={event=>{
                            setData({
                                ...data,
                                email:event.target.value
                            })
                        }} value={data.email} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
                    </div>
                    {/* {for password} */}
                    <div className="mt-3">
                        <label htmlFor="user_password" className="block text-sm font-medium mb-2 ps-2">Password</label>
                        <input type="password" id="user_password" name="user_password" onChange={event=>{
                            setData({
                                ...data,
                                password:event.target.value
                            })
                        }} value={data.password} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
                    </div>
                    {/* {for about section} */}
                    <div className="mt-3">
                        <label htmlFor="user_about" className="block text-sm font-medium mb-2 ps-2">About</label>
                        <textarea id="user_about" rows={8} name="user_about" onChange={event=>{
                            setData({
                                ...data,
                                about:event.target.value
                            })
                        }} value={data.about} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></textarea>
                    </div>
                    <div className="mt-3 text-center">
                        <button type="submit" className="px-2 py-3 bg-green-600 rounded hover:bg-green-900">Signup</button>
                        <button type="button" onClick={resetForm} className="px-2 py-3 bg-red-600 rounded ms-3 hover:bg-red-900"> Reset</button>
                    </div>
                    {/* {JSON.stringify(data)} */}
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp