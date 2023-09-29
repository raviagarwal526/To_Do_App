"use client"
import React from 'react'

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">
            Welcome to Work Manager application
          </h1>
          <p>
            Temp data is store in p tag.
          </p>
        </div>
        <div className="text-center">
          <h1>
            Important Links-
          </h1>
          <ul>
            <li>
              <a href="#!">Facebook</a>
            </li>
            <li>
              <a href="#!">Instgram</a>
            </li>
            <li>
              <a href="#!">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer