"use client"

import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const CustomNavbar = () => {
  const router = useRouter()
  const context = useContext(UserContext) 
//   console.log(context)

  async function doLogout(){
    try {
        const result = await logout()
        console.log(result)
        context.setUser(undefined)
        router.push('/')
    } catch (error) {
        console.log(error)
        toast.error("Logout error")
    }
  } 

  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between items-center">
        <div className="brand-2xl font-semibold">
            <h1><a href="/">Work-Manager</a></h1>
        </div>
        <div>
            <ul className="flex space-x-5">
                {
                    context.user && (
                        <>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/add-task'} className="hover:text-blue-200">Add Task</Link></li>
                            <li><Link href={'/show-tasks'} className="hover:text-blue-200">Show Tasks</Link></li>
                        </>
                    )
                }
            </ul>
        </div>
        <div>
            <ul className="flex space-x-3">
                {
                    context.user && (
                        <>
                            <li><Link href="#!">{context.user.name}</Link></li>
                            <li><button onClick={doLogout}>Logout</button></li>
                        </>
                    )
                    
                }
                {
                    !context.user && (
                        <>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/signup">Sign Up</Link></li>
                        </>
                    )
                    
                }
            </ul>
        </div>
    </nav>
  )
}

export default CustomNavbar