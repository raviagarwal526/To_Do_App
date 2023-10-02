"use client"
import React from 'react'
import signupBanner from'../../assets/signup.svg'
import Image from 'next/image'

const SignUp = () => {
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
                <form action="#!" className="mt-5">
                    {/* {for username} */}
                    <div className="mt-3">
                        <label htmlFor="user_name" className="block text-sm font-medium mb-2 ps-2">Username</label>
                        <input type="text" id="user_name" className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
                    </div>
                    {/* {for email} */}
                    <div className="mt-3">
                        <label htmlFor="user_email" className="block text-sm font-medium mb-2 ps-2">Email</label>
                        <input type="email" id="user_email" className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
                    </div>
                    {/* {for password} */}
                    <div className="mt-3">
                        <label htmlFor="user_password" className="block text-sm font-medium mb-2 ps-2">Password</label>
                        <input type="password" id="user_password" className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></input>
                    </div>
                    {/* {for about section} */}
                    <div className="mt-3">
                        <label htmlFor="user_about" className="block text-sm font-medium mb-2 ps-2">Email</label>
                        <textarea id="user_about" rows={8} className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-800"></textarea>
                    </div>
                    <div className="mt-3 text-center">
                        <button className="px-2 py-3 bg-green-600 rounded hover:bg-green-900">Signup</button>
                        <button className="px-2 py-3 bg-red-600 rounded ms-3 hover:bg-red-900"> Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp