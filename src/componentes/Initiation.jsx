import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../assets/img/logogif.gif'

export const Initiation = () => {
  return (
    <div id="Home" className="relative flex flex-col items-center my-20 lg:flex-row  lg:right-24">
      <div className="">
        <img src={gif} className=" w-96  rounded-full lg:ml-80 relative"></img>
        <Link to="/hv" className='relative -top-10 left-44 lg:right-28 lg:top-20 '>
          <button id="boton" className="font-DynaPuff bg-rosado text-blanco rounded-lg flex flex-row pr-3 pl-3 hover:text-rosado hover:bg-blanco  sm:text-xl sm:mt-2 lg:w-36 lg:justify-center lg:h-8 lg:items-center  ">from my
            <span className="flex items-center space-x-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6 text-blanco hover:text-rosado">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </span>
          </button>
        </Link>  
      </div>
      <div className="pr-4 ">
        <h2 className="font-DynaPuff text-blanco text-lg sm:text-4xl">¡Hello, Welcome! I'am</h2>
        <h1 className="font-DynaPuff text-rosado text-2xl sm:text-5xl">Lily Johana Castillo Forero</h1>
        
      </div>
    </div>
  )
}


