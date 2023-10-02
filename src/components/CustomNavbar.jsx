"use client"

import Link from 'next/link'
import React from 'react'

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between items-center">
        <div className="brand-2xl font-semibold">
            <h1><a href="/">Work-Manager</a></h1>
        </div>
        <div>
            <ul className="flex space-x-5">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/add-task'} className="hover:text-blue-200">Add Task</Link></li>
                <li><Link href={'/show-tasks'} className="hover:text-blue-200">Show Tasks</Link></li>
            </ul>
        </div>
        <div>
            <ul className="flex space-x-3">
                <li><a href="#!">Login</a></li>
                <li><Link href="/signup">Sign Up</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default CustomNavbar